import { COOKIE_NAME } from './../constants';
import {Resolver,Mutation,Arg,InputType,Field,Ctx,ObjectType,Query,} from "type-graphql";

import { User } from "../entities/User";
import { MyContext } from "../types."
import {  } from "../entities/User"
import argon2 from "argon2";
import { getConnection } from 'typeorm';
 
@InputType()
class UsernamePasswordInput {
 @Field()
 username: string;
 @Field()
 password: string;
}

@ObjectType()
class FieldError {
 @Field()
 field: string;
 @Field()
 message: string;
}

@ObjectType()
class UserResponse {
 @Field(() => [FieldError], { nullable: true })
 errors?: FieldError[];

 @Field(() => User, { nullable: true })
 user?: User;
}

@Resolver()
export class UserResolver {
 @Query(() => User, { nullable: true })
 me(@Ctx() { req }: MyContext) {
   // you are not logged in
   if (!req.session.userId) {
     return null;
   }

   return User.findOne(req.session.id)
 }

 @Mutation(() => UserResponse)
 async register(
   @Arg("options") options: UsernamePasswordInput,
   @Ctx() { req }: MyContext
 ): Promise<UserResponse> {
   if (options.username.length <= 2) {
     return {
       errors: [
         {
           field: "username",
           message: "length must be greater than 2",
         },
       ],
     };
   }

   if (options.password.length <= 2) {
     return {
       errors: [
         {
           field: "password",
           message: "password length must be greater than 2",
         },
       ],
     };
   }

   const hashedPassword = await argon2.hash(options.password);
   let user;
   try {
     const result =  await getConnection().createQueryBuilder().insert().into(User).values(
       {username: options.username,
       password: hashedPassword,}
     ).returning("*")
      .execute();
      user = result.raw[0]
   } catch (err) {
     //|| err.detail.includes("already exists")) {
     // duplicate username error
     if (err.code === "23505") {
       return {
         errors: [
           {
             field: "username",
             message: "username already taken",
           },
         ],
       };
     }
   }

   // store user id session
   // this will set a cookie on the user
   // keep them logged in after registering 
   req.session.userId = user.id;

   return { user };
 }

 @Mutation(() => UserResponse)
 async login(
   @Arg("options") options: UsernamePasswordInput,
   @Ctx() { req }: MyContext
 ): Promise<UserResponse> {
   const user = await User.findOne({ where :{username: options.username }});
   if (!user) {
     return {
       errors: [
         {
           field: "username",
           message: "that username doesn't exist",
         },
       ],
     };
   }
   const valid = await argon2.verify(user.password, options.password);
   if (!valid) {
     return {
       errors: [
         {
           field: "password",
           message: "incorrect password",
         },
       ],
     };
   }

   req.session.userId = user.id;
   console.log(user.id)
   return {
     user,
   };
 }
 @Mutation(() =>Boolean)
 logout(
  @Ctx() {req, res}:MyContext
 ){
  return new Promise(resolve => req.session.destroy((err:any) =>{
    res.clearCookie(COOKIE_NAME)
    if(err){
      console.log(err)
      resolve(false)
      return
    }
    resolve(true)
  }))
 }
}
