
import { Animal } from "./Animal";

export class Animals {
  private static instance: Animals;
  private animalList: Animal[] = [];

  private constructor() {}

  public static getInstance(): Animals {
    if (!Animals.instance) {
      Animals.instance = new Animals();
    }
    return Animals.instance;
  }

  addAnimal(animal: Animal): void {
    this.animalList.push(animal);
  }

  getAnimals(): Animal[] {
    return this.animalList;
  }
}
