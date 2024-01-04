const user = {
  idUser: 1,
  nameUser: "John",
  address: {
    city: "Jakarta",
    district: "pasar minggu",
  },
};

function getInfo() {
  //menambahkan parameter gaji
  console.log(`This ${this.idUser} have a name ${this.nameUser}`); //jika ingin menampilkan yang diparameter contoh ditambahkan ${gaji}
  console.log(this.address.city);
}

// ada dua cara pemanggilan
// getInfo.call(user, 3000000); //menambahkan nilai untuk dimasukan ke variable gaji
getInfo.apply(user);

//ada dua cara penggunaan bind
// 1. membuat variabel baru, lalu dipanggil
const getUser = getInfo.bind(user);
getUser();
//2. langsung dipanggil object user dengan menambahkan kurung kosong
getInfo.bind(user)();
