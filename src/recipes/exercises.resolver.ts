import { Args, Query, Resolver } from "@nestjs/graphql";
import { Exercise } from "./models/exercise";
import { ExerciseService } from "./exercises.service";
import { Get, Param } from "@nestjs/common";

@Resolver((of) => Exercise)
export class ExercisesResolver {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Query(() => [Exercise])
  async exercises(): Promise<Exercise[]> {
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

  @Query(() => Exercise)
  async exercise(@Args("id") id: string): Promise<Exercise> {
    console.log(id);
    return this.exerciseService.getById(id);
  }
}
