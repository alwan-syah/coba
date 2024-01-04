const obj1 = new Object(); //object structural syntax
const obj2 = {}; // object literal syntax

console.log(obj2);

const user = {
  firstName: "Adam",
  lastName: "Malik",
  age: 27,
  address: "Malang",
  gaji: 13_500_000,

  //bisa menambahkan method property dalam object
  mengajar: (potonganGaji) => {
    console.log("merek melek", potonganGaji);
  },
};

//ini bisa dilakukan karena bukan reasign
user["gaji"] -= 200000;

//bisa menambahkan property object karena bukan reasign
user["hobby"] = "mendatangi event wibu";

//memanggil properti object ada dua cara
console.log("Gaji kamu cuma: ", user["gaji"]);
console.log("Gaji kamu cuma: ", user.gaji);

console.log("Hobby Kamu: ", user["hobby"]);

//untuk memanggil method dalam object, tidak bisa menggunakan console.log
user.mengajar();

//memasukan value pada method mengajar
user.mengajar(5000000);

//Pass by reference
let adam = user;
user.firstName = "Madam";
console.log(adam.firstName);
