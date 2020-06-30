class Creature {
  numberOfHands: number;
  numberOfFeets: number;

  constructor(numberOfHands: number, numberOfFeets: number) {
    this.numberOfHands = numberOfHands;
    this.numberOfFeets = numberOfFeets;
  }
}

// sub clas
class Dog extends Creature {
  bark: string;

  constructor(bark: string) {
    super(0, 4);
    this.bark = bark;
  }

  barking() {
    return `${this.bark}! ${this.bark}!`;
  }

  shakeTail() {
    console.log(this.barking());
  }
}

const creature = new Creature(10, 20);
const dog = new Dog("bow-wow");
dog.shakeTail();
