// polymorpsim memilki 2 jenis
class Animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }

  sound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, food) {
    super(name, food);
  }
}

class Cihuahua extends Dog {
  constructor(name, food) {
    super(name, food);
  }
}

class Cat extends Animal {
  constructor(name, food) {
    super(name, food);
  }
}

class Crocodile {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }

  sound() {
    console.log(`${this.name} makes a sound`);
  }
}

function makeASound(animal) {
  animal.sound();
}

makeASound(new Cat("Grafild"));
makeASound(new Dog("Scooby"));
makeASound(new Crocodile("Evan"));
