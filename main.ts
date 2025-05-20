
import { Zookeeper } from "./classes/Zookeeper";
import { Zebra, Elephant, Tiger } from "./classes/Animal";
import { Animals } from "./classes/Animals";
import { Employees } from "./classes/Employees";
import { Logger } from "./utils/Logger";

document.getElementById("employeeForm")!.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = (document.getElementById("employeeName") as HTMLInputElement).value;
  const emp = new Zookeeper(name);
  emp.enterZoo();
  emp.takeSafetyTrainings();
  Employees.getInstance().addEmployee(emp);
});

document.getElementById("animalForm")!.addEventListener("submit", function (e) {
  e.preventDefault();
  const type = (document.getElementById("animalType") as HTMLSelectElement).value;
  const name = (document.getElementById("animalName") as HTMLInputElement).value;
  const age = +(document.getElementById("animalAge") as HTMLInputElement).value;
  const extra1 = (document.getElementById("animalExtra1") as HTMLInputElement).value;
  const extra2 = (document.getElementById("animalExtra2") as HTMLInputElement).value;

  let animal;

  if (type === "Zebra") {
    animal = new Zebra(name, age, +extra1, extra2);
  } else if (type === "Elephant") {
    animal = new Elephant(name, age, +extra1);
  } else {
    animal = new Tiger(name, age);
  }

  Animals.getInstance().addAnimal(animal);
  Logger.getInstance().log(`${type} ${name} was added.`);
});

document.getElementById("logEmployees")!.addEventListener("click", () => {
  Logger.getInstance().log("Logging all employees:");
  Employees.getInstance().getEmployees().forEach(e => Logger.getInstance().log(JSON.stringify(e)));
});

document.getElementById("logAnimals")!.addEventListener("click", () => {
  Logger.getInstance().log("Logging all animals:");
  Animals.getInstance().getAnimals().forEach(a => Logger.getInstance().log(JSON.stringify(a)));
});
