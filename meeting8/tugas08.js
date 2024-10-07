// tugas skilvul no 1
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

// Tulis kode kamu di bawah ini
class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah) {
    super(nama, umur);
    this.namaSekolah = namaSekolah;
  }

  belajar() {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}
let user = new Pelajar("Rayyan", 16, "abudzar");
console.log(user);
// latihan skilvul no 2

class hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

class harimau extends hewan {
  constructor(nama) {
    super(nama);
  }

  makan() {
    return `${this.nama} makan daging`;
  }
}

let harimau1 = new harimau("harimau sumatra");
console.log(harimau1.makan());



// tugas latihan 8
class Venicle {
  constructor(nama, brand) {
    this.nama = nama;
    this.brand = brand;
  }

  starting() {
    return `${this.nama} Venicle is starting`;
  }
}

class Car extends Venicle {
  constructor(nama, model, brand) {
    super(nama, brand);
    this.model = model;
  }

  starting() {
    return `${this.nama} ${this.model} Car is starting ${this.brand}`;
  }
}
let Car1 = new Car("BMW", "Mercedes", 21);
console.log(Car1.starting());

// tugas no 2
class Shape {
  constructor(nama) {
    this.nama = nama;
  }

  draw() {
    return `${this.nama} Drawing shape`;
  }
}

class Rectangle extends Shape {
  constructor(nama) {
    super(nama);
  }
  drawing() {
    return `${this.nama} Drawing Rectangle`;
  }
}

let Rectangle1 = new Rectangle("");
console.log(Rectangle1.drawing());

// tugas no 3
class Person {
  constructor(nama) {
    this.nama = nama;
  }
  introduce() {
    return ` my name is ${this.nama}`;
  }
}
class Employee extends Person {
  constructor(nama,position) {
    super(nama)
    this.position = position;
  }
  introduce() {
    return ` my name is ${this.nama} and I'm ${this.position}`;
  }
}
class Manager extends Employee {
  constructor(nama,position) {
    super(nama,position);
    
  }
  introduce() {
    return  `my name is ${this.nama} and im ${this.position} and im Manage a team`;
  }
}
let Manager1 = new Employee("Rayyan", "Programmer");
console.log(Manager1.introduce());

let person1 = new Person("Rayyan")
console.log(person1.introduce())

let manager1 = new Manager ("Rayyan","Programmer")
console.log(manager1.introduce())
