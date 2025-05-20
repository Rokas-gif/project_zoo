
import { Employee } from "./Employee";
import { Animal } from "./Animal";
import { Logger } from "../utils/Logger";

export class Zookeeper extends Employee {
  constructor(public name: string) {
    super();
  }

  enterZoo(): void {
    this.isEmployeeAtZoo = true;
    Logger.getInstance().log(`${this.name} entered the zoo.`);
  }

  leaveZoo(): void {
    this.isEmployeeAtZoo = false;
    Logger.getInstance().log(`${this.name} left the zoo.`);
  }

  takeSafetyTrainings(): void {
    this.safetyTrainingCompletionDate = new Date();
    Logger.getInstance().log(`${this.name} completed safety training.`);
  }

  feedAnimal(animal: Animal): void {
    Logger.getInstance().log(`${this.name} fed ${animal.name} at ${new Date().toLocaleTimeString()}`);
  }
}
