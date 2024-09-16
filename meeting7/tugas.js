// no 1
const person = {
  name: "rayyan",
  age: 16,
  address: {
    city: "jakarta",
    country: "indonesia",
  },
};
console.log(person.address.city);
person.age = person.age + 5;
console.log(person.age);

delete person.city
console.log(person.city);
// batas

// no 2
const person2 = {
  name: "rayyan",
  age: 16,
  address: {
    city: "jakarta",
    country: "indonesia",
  },
};
const { name, age } = person2;
console.log(name, age);

const { name: userName, age: userAge } = person2;
console.log(userName, userAge);

// no 3
class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getdetail() {
    return `${this.title} by ${this.author}`;
  }
  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }
}

const buku = new book("JavaScript Essential", "Jane Doe");
console.log(buku.getdetail());

buku.updateAuthor("Rayyan Ghibran Ananta");
console.log(buku.getdetail());
