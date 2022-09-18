import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Recipe {
  @Field(type => ID)
  id: string;
}
