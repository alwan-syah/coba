//method yang diterapkan sebuah objeck bisa mengubah isi dari object tersebut,
//  intinya membutuh kan pembatasan akses kebeberapa properti

class MyClass {
  // #untuk memberikan tanda pagar (#) bahwa private
  #Field;

  constructor(value) {
    this.#Field = value;
  }

  getPrivateField() {
    return this.#Field;
  }

  setPrivateField(value) {
    this.#Field = value;
  }
}

const obj = new MyClass("Secret");
obj.setPrivateField("Tidak secret");
console.log(obj.getPrivateField());
