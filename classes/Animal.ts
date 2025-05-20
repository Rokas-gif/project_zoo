
export abstract class Animal {
  constructor(public name: string, public age: number) {}

  abstract makeSound(): void;
}

export interface Walkable {
  walk(): void;
  sleep(): void;
}

export interface Runnable {
  jump(): void;
  run(): void;
}

export interface Swimmable {
  swim(): void;
  hunt(): void;
}

export class Zebra extends Animal implements Walkable {
  constructor(name: string, age: number, public maxSpeed: number, public origin: string) {
    super(name, age);
  }

  makeSound(): void {
    console.log("Zebra says: neigh");
  }

  walk(): void {
    console.log("Zebra walks");
  }

  sleep(): void {
    console.log("Zebra sleeps");
  }
}

export class Elephant extends Animal implements Walkable {
  constructor(name: string, age: number, public weight: number) {
    super(name, age);
  }

  makeSound(): void {
    console.log("Elephant says: trumpet");
  }

  walk(): void {
    console.log("Elephant walks");
  }

  sleep(): void {
    console.log("Elephant sleeps");
  }
}

export class Tiger extends Animal implements Swimmable {
  private lastOutTime: Date;

  constructor(name: string, age: number) {
    super(name, age);
    this.lastOutTime = new Date(Date.now() - 7 * 60 * 60 * 1000);
  }

  makeSound(): void {
    console.log("Tiger says: roar");
  }

  swim(): void {
    console.log("Tiger swims");
  }

  hunt(): void {
    console.log("Tiger hunts");
  }

  wasOutsideLast8h(): boolean {
    const now = new Date();
    return (now.getTime() - this.lastOutTime.getTime()) / 3600000 < 8;
  }
}
