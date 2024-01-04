// function car() {
//   (this.brand = "BMW"),
//     (this.series = "E36"),
//     (this.run = function () {
//       console.log("brum brum brum");
//     });
// }

// const bmw = new car();
// bmw.run();

// lebih banyak obejct dan fleksibel
function car(brand, series) {
  (this.brand = brand),
    (this.series = series),
    (this.run = function () {
      console.log("brum brum brum", this.brand);
    });
}

const bmw = new car("BMW", "E36");
const tesla = new car("Tesla", "Model X");

bmw.run();
console.log(bmw);
bmw.brand;
tesla.run();

class Animal {
  // cunstruction merupakan method
  constructor(species, race, suara) {
    console.log("ini constructor");
    (this.species = species), (this.race = race), (this.suara = suara);
  }

  //   static agar method sound hanya bisa dipanggil oleh class
  static sound() {
    console.log("this.suara");
  }
}

const kucing = new Animal("Kucing", "Anggora", "Meong");
// kucing.sound();

console.log(kucing.species);
Animal.sound();
