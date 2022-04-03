import { Food } from '../entities/Food';
import { Resolver, Query, Arg, Mutation, Field, InputType } from "type-graphql";
import { GraphQLUpload } from 'graphql-upload' 
import { Upload } from '../types.';
import { createWriteStream } from 'fs';
@InputType()
class BurgerInput{
 @Field()
 foodName: string;

 @Field()
 foodDescription: string;

 @Field()
 foodReviewStar: number;

 @Field()
 foodImageUrl:string;

 @Field()
 foodCategory: string;

 @Field()
 foodPrice: number;
}
    
@Resolver()
export class BurgerResolver {
  @Query(() => [Food])
  async Burger(): Promise<Food[]> {
    return Food.find()
  }

  @Query(() => Food, { nullable: true })
  singleBurger(@Arg("id") id: number) :Promise<Food | undefined> {
    return Food.findOne(id)
  }

  @Mutation(() => Food)
  async createBurger(@Arg("input") input: BurgerInput): Promise<Food> {
    return Food.create({
      ...input,
    }).save();
  }

  @Mutation(() => Boolean)
  async addBurgerImage(@Arg("picture", () => GraphQLUpload)
  {
    createReadStream,
    filename
  }: Upload) { 
      createReadStream()
        .pipe(createWriteStream(__dirname + `/../../img/${filename}`))
        return true
  }

}