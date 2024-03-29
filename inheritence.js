//untuk menguangi redudansi, biar clean code
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

  gonggong() {
    console.log("gong");
  }
}

class Cihuahua extends Dog {
  constructor(name, food) {
    super(name, food);
  }
}

let dog = new Dog("Udin");
dog.sound();

let skubi = new Cihuahua("skubi");
skubi.sound();
