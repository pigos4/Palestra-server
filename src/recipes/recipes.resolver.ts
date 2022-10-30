import { Query, Resolver } from "@nestjs/graphql";
import { Exercises } from "./models/recipe.model";
import { RecipesService } from "./recipes.service";

@Resolver((of) => Exercises)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(() => [Exercises])
  async exercise(): Promise<Exercises[]> {
    
    return [
      {
        id: "1",
        name: "Incline Bench Sit-ups",
        image:
          "https://s3.amazonaws.com/prod.skimble/assets/2088143/image_iphone.jpg",
      },
      { id: "123", name: "abc", image: "url" },
    ];
  }
}
