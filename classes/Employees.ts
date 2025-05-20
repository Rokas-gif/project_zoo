
import { Employee } from "./Employee";

export class Employees {
  private static instance: Employees;
  private employeeList: Employee[] = [];

  private constructor() {}

  public static getInstance(): Employees {
    if (!Employees.instance) {
      Employees.instance = new Employees();
    }
    return Employees.instance;
  }

  addEmployee(emp: Employee): void {
    this.employeeList.push(emp);
  }

  getEmployees(): Employee[] {
    return this.employeeList;
  }
}
