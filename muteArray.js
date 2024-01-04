const kumpulanAngka = [1, 2, 3, 4, 5];

kumpulanAngka[0] = 7;

const angkaBaru = [...kumpulanAngka];

kumpulanAngka[1] = 0;

console.log(angkaBaru);

// foreach Array
const kumka = [1, 2, 3, 4, 5];
kumka.forEach((e) => {
  console.log(e * 2);
});
console.log(kumka);

// map array
let ma = kumka.map((e) => {
  return e * 2;
});
console.log(ma);

//spreat operator ada yang tiga titik di awal variabel contohnya ...rest
// berfungsi untuk menampilkan sisa object yang tidak terpanggil saja
const [satu, dua, ...rest] = kumka;
console.log(rest);
