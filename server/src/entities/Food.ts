import { Field, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Food extends BaseEntity{
 @Field()
 @PrimaryGeneratedColumn()
 id!: number;

 @Field(() => String)
 @CreateDateColumn()
 createdAt: Date;

 @Field(() => String)
 @UpdateDateColumn()
 updatedAt: Date;

 @Field()
 @Column({ type: "text"})
 foodName!: string;

 @Field()
 @Column({ type: "text"})
 foodDescription!: string;

 @Field()
 @Column()
 foodReviewStar: number;

 @Field()
 @Column()
 foodImageUrl!:string;

 @Field()
 @Column()
 foodCategory!: string;

 @Field()
 @Column()
 foodPrice!: number;
}

