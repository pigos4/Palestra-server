import { Injectable } from "@nestjs/common";
import { Exercise } from "./models/exercise";

@Injectable()
export class ExerciseService {
  async getById(id: string) {
    console.log(id,"in service");
    return {
      id: "1",
      name: "Incline Bench Sit-ups",
      image:
        "https://s3.amazonaws.com/prod.skimble/assets/2088143/image_iphone.jpg",
    };
  }
}
