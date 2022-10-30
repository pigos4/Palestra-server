import { Module } from '@nestjs/common';
import { ExercisesResolver } from './exercises.resolver';
import { ExerciseService } from './exercises.service';

@Module({
  providers: [ExercisesResolver, ExerciseService],
})
export class RecipesModule {}
