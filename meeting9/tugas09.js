// no 1 skilful
class Pelajar {
  constructor(nama, sekolah) {
    var _nama = nama;
    var _sekolah = sekolah;

    this.setNama = function (nama) {
      _nama = nama;
    };

    this.setSekolah = function (sekolah) {
      _sekolah = sekolah;
    };

    this.getNama = function () {
      return _nama;
    };

    this.getSekolah = function () {
      return _sekolah;
    };
  }

  belajar() {
    return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}

let pelajar = new Pelajar("Alpha", "Skilvul");

console.log(pelajar.belajar());

//   no 2 skilful
class PersegiPanjang {
  constructor({ panjang, lebar }) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas() {
    const hasil = this.panjang * this.lebar;
    return `Luas persegi panjang adalah ${this.panjang} x ${this.lebar} = ${hasil}`;
  }

  keliling() {
    const hasil = 2 * (this.panjang + this.lebar);
    return `Keliling persegi panjang adalah 2 x (${this.panjang} + ${this.lebar}) = ${hasil}`;
  }
}

const persegiPanjang = new PersegiPanjang({ panjang: 4, lebar: 3 });
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());
// tugas no 1 asli
class Mobil {
  constructor(merek, tahun) {
    this._merek = merek;
    this._tahun = tahun;
  }

  setMerek(merek) {
    this._merek = merek;
  }

  getMerek() {
    return this._merek;
  }

  setTahun(tahun) {
    this._tahun = tahun;
  }

  getTahun() {
    return this._tahun;
  }

  spek() {
    return `Mobil ini bermerek ${this.getMerek()} dikeluarkan pada tahun ${this.getTahun()}`;
  }
}

const mobil = new Mobil("Toyota", 2020);
console.log(mobil.spek());

// tugas no 2
class Pesawat {
  constructor(jenis, kecepatan) {
    var _jenis = jenis;
    var _kecepatan = kecepatan;

    this.setJenis = function (jenis) {
      _jenis = jenis;
    };

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getJenis = function () {
      return _jenis;
    };

    this.getKecepatan = function () {
      return _kecepatan;
    };
  }

  terbang() {
    return `Pesawat dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()}`;
  }
}

class Jet extends Pesawat {
  constructor(jenis, kecepatan, kapasitasBahanBakar) {
    super(jenis, kecepatan);
    var _kapasitasBahanBakar = kapasitasBahanBakar;

    this.setKapasitasBahanBakar = function (kapasitasBahanBakar) {
      _kapasitasBahanBakar = kapasitasBahanBakar;
    };

    this.getKapasitasBahanBakar = function () {
      return _kapasitasBahanBakar;
    };
  }

  isi() {
    return `Jet dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()} dengan kapasitas bahan bakar ${this.getKapasitasBahanBakar()}`;
  }
}

let pesawat1 = new Pesawat("airbus", 300);
console.log(pesawat1.terbang());

let jet1 = new Jet("boeing", 500, 1000);
console.log(jet1.isi());
// tugas no 3
class Karyawan {
  constructor(nama, gaji, jabatan) {
    this._nama = nama;
    this._gaji = gaji;
    this._jabatan = jabatan;
  }

  setNama(nama) {
    this._nama = nama;
  }

  getNama() {
    return this._nama;
  }

  setJabatan(jabatan) {
    this._jabatan = jabatan;
  }

  getJabatan() {
    return this._jabatan;
  }

  setGaji(gaji) {
    this._gaji = gaji;
  }

  getGaji() {
    return this._gaji;
  }
}

class Manager extends Karyawan {
  constructor(nama, gaji, jabatan, tunjangan) {
    super(nama, gaji, jabatan);
    this._tunjangan = tunjangan;
  }

  setTunjangan(tunjangan) {
    this._tunjangan = tunjangan;
  }

  getTunjangan() {
    return this._tunjangan;
  }

  beriTunjangan() {
    return `Manager ${this.getNama()} dengan jabatan ${this.getJabatan()} dengan gaji ${this.getGaji()} dan tunjangan ${this.getTunjangan()}`;
  }
}

// Contoh penggunaan
let karyawan1 = new Manager("Rayyan", 5000000, "Manager", 1000000);
console.log(karyawan1.beriTunjangan());
// no 4
class kendaraan {
  constructor(kecepatan) {
    var _kecepatan = kecepatan;

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getKecepatan = function () {
      if (_kecepatan < 0) {
        return (kecepatan = 0);
      } else {
        return (_kecepatan = kecepatan);
      }
    };
  }
}

let kendaraan1 = new kendaraan(100);
console.log(kendaraan1.getKecepatan());
// no 5
class akunBank {
  constructor(saldo, setoran) {
    var _saldo = saldo;
    var _setoran = setoran;
    this.setSaldo = function (saldo) {
      _saldo = saldo;
    };

    this.setSetoran = function (setoran) {
      _setoran = setoran;
    };

    this.getSetoran = function () {
      return _setoran;
    };
    this.getSaldo = function () {
      if (_saldo < 0) {
        return (saldo = Null);
      } else {
        return (_saldo = saldo + setoran);
      }
      // return _saldo;
    };
  }
}

let akun1 = new akunBank(1000, 5000);
console.log(akun1.getSaldo());
// no 6
class Karyawan2 {
  constructor(nama, gaji) {
    this._nama = nama;
    this._gaji = gaji;
  }

  setNama(nama) {
    this._nama = nama;
  }

  setGaji(gaji) {
    this._gaji = gaji;
  }

  getNama() {
    return this._nama;
  }

  getGaji() {
    return this._gaji;
  }
}

class Manajer2 extends Karyawan2 {
  constructor(nama, gaji) {
    super(nama, gaji);
  }

  laporan() {
    return `Manajer ${this.getNama()} diberi gaji sebesar ${this.getGaji()} Rupiah`;
  }
}

let karyawan3 = new Manajer2("Rayyan", 5000000);
console.log(karyawan3.laporan());
