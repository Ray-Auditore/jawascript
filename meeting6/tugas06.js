// no 1
const rayyan = ["rayyan", 16, "jakarta"];

console.log(rayyan);

console.log(rayyan[0]);
console.log(rayyan[1]);
console.log(rayyan[2]);
// no 2
rayyan[1] = "ananta";
console.log(rayyan);

// no 3
rayyan.splice(1,1);
console.log(rayyan);

// no 4
const cihuy1 = [1,2,3];
const cihuy2 = [4,5,6];
const cihuy = cihuy1.concat(cihuy2);
console.log(cihuy)

// no 5
const rayyan1 = ["rayyan", '16', "jakarta"];
console.log(rayyan1.indexOf("16"));

// no 6
const numbers = [5,6,7,8,9,1];
numbers.sort();
console.log(numbers)

// no 7
const numbers1 = [5,6,7,8,9,1];

console.log(numbers1.length);