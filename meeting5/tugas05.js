// nomer 1

let hari = "Sabtu";

switch (hari) {
  case "senin":
    console.log("Weekday");
    break;
  case "selasa":
    console.log("Weekday");
    break;
  case "rabu":
    console.log("Weekday");
    break;
  case "kamis":
    console.log("Weekday");
    break;
  case "jumat":
    console.log("Weekday");
    break;
  case "sabtu":
    console.log("Weekend");
   break;
  case "minggu":
    console.log("Weekend");
    break;
}
//nomer 2 
for (let i = 12; i <= 80; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
      console.log("FizzBuzz",i);
    } else if (i % 3 === 0) {
      console.log("Fizz",i);
    } else if (i % 5 === 0) {
      console.log("Buzz"+i);
    } else {
      console.log(i);
    }
  }
  
  
  //nomer 3
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

//   nomer 4
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
      console.log("multipleofthree",i);
    } else {
      console.log(i);
    }
  }