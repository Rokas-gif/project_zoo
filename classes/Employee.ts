
export abstract class Employee {
  public isEmployeeAtZoo: boolean = false;
  public safetyTrainingCompletionDate: Date | null = null;

  abstract enterZoo(): void;
  abstract leaveZoo(): void;
  abstract takeSafetyTrainings(): void;
}
