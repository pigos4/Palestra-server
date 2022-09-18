import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';
import { RecipesService } from './recipes.service';

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(() => Recipe)
  async recipe(): Promise<Recipe> {
    return { id: "123" };
  }
}
