import { Food } from '../entities/Food';
import { Resolver, Query, Arg, Mutation, Field, InputType } from "type-graphql";
import { GraphQLUpload } from 'graphql-upload' 
import { Upload } from '../types.';
import { createWriteStream } from 'fs';
@InputType()
class FoodInput{
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
export class FoodResolver {
  @Query(() => [Food])
  async foods(): Promise<Food[]> {
    return Food.find()
  }

  @Query(() => Food, { nullable: true })
  food(@Arg("id") id: number) :Promise<Food | undefined> {
    return Food.findOne(id)
  }

  @Query(() => [Food], { nullable: true })
  foodType(@Arg("foodCategory") foodCategory: string) :Promise<Food | undefined> {
    return Food.findOne(foodCategory)
  }
  @Mutation(() => Food)
  async createFood(@Arg("input") input: FoodInput): Promise<Food> {
    return Food.create({
      ...input,
    }).save();
  }

  @Mutation(() => Food, { nullable: true })
  async updateFoodDescription(
    @Arg("id") id: number,
    @Arg("foodDescription", () => String, { nullable: true }) foodDescription: string,
  ): Promise<Food | null> {
    const food = await Food.findOne(id);
    if (!food) {
      return null;
    }
    if (typeof foodDescription !== "undefined") {
     await Food.update({id}, {foodDescription})
    }
    return food;
  }

  @Mutation(() => Food, { nullable: true })
  async updateFoodImageUrl(
    @Arg("id") id: number,
    @Arg("foodImageUrl", () => String, { nullable: true }) foodImageUrl: string,
  ): Promise<Food | null> {
    const food = await Food.findOne(id);
    if (!food) {
      return null;
    }
    if (typeof foodImageUrl !== "undefined") {
     await Food.update({id}, {foodImageUrl})
    }
    return food;
  }
 
  @Mutation(() => Boolean)
  async addFoodImage(@Arg("picture", () => GraphQLUpload)
  {
    createReadStream,
    filename
  }: Upload) { 
      createReadStream()
        .pipe(createWriteStream(__dirname + `/../../img/${filename}`))
        return true
  }


  @Mutation(() => Food, { nullable: true })
  async updateFoodCategory(
    @Arg("id") id: number,
    @Arg("foodCategory", () => String, { nullable: true }) foodCategory: string,
  ): Promise<Food | null> {
    const food = await Food.findOne(id);
    if (!food) {
      return null;
    }
    if (typeof foodCategory !== "undefined") {
     await Food.update({id}, {foodCategory})
    }
    return food;
  }
  @Mutation(() => Food, { nullable: true })
  async updateFoodPrice(
    @Arg("id") id: number,
    @Arg("foodCategory", () => String, { nullable: true }) foodPrice: number,
  ): Promise<Food | null> {
    const food = await Food.findOne(id);
    if (!food) {
      return null;
    }
    if (typeof foodPrice !== "undefined") {
     await Food.update({id}, {foodPrice})
    }
    return food;
  }
  @Mutation(() => Boolean)
  async deleteFood(@Arg("id") id: number,): Promise<boolean> {
    await Food.delete(id) 
    return true;
  }
}

