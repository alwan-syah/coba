let nama = "Jhony";
nama[0] = "B";

const user = {
  nama: "Adam",
  umur: 27,
  alamat: {
    kota: "Jakarta",
    kecamatan: "Pasar Minggu",
  },
  hobi: "Makan",
};

// const madam = { ...user };

// user.name = "Madam";

// const madam = Object.assign({}, user);
// user.umur = 30;
// console.log(madam);

const madam = { ...user, alamat: { ...user.alamat } };

user.name = "Madam";

user.umur = 30;

console.log(madam);
console.log(user);

//object restruction
const {
  nama,
  umur,
  alamat: { kota, distrik },
} = user;
user.alamat.kecamatan = "Jatinegara";
console.log(sisa);
