import {  Field, ID, ObjectType } from '@nestjs/graphql';


// @ObjectType({ description: 'Exercise ' })
// export class Exercise {
//   @Field(type => ID)
//   id: string;

//   @Field()
//   name:string;

//   @Field()
//   image:string;

// }
@ObjectType({ description: "Exercises " })
export class Exercises {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;
}
