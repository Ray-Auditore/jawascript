//soal 1 

function simulateDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay Finished");
    }, 2000);
  });
}

async function result() {
  let rst = await simulateDelay();
  console.log(rst);
}

console.log(result());

// soal 2
async function calculateDivision(angka1, angka2) {
  return await new Promise(() => {
    try {
      if (angka2 === 0) {
        throw new Error("Pembagi tidak boleh 0");
      }
      const hasil = angka1 / angka2;

      console.log(hasil);
    } catch (error) {
      console.log(error.message);
    }
  });
}

calculateDivision(12, 0);

// soal 3
async function performTasks() {
    const result = await Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                resolve("Task 1");
            }, 1000);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve("Task 2");
            }, 2000);
        })
    ]);
    
    console.log(result);
}

performTasks();

// soal 4
async function getPostDetails() {
    const result = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
    const data = await result.json();
      if (result.status === 200) {
        console.log(data.title);
      } else {
        console.log("failed to fetch post");
      }
    }
    
    getPostDetails();
    
// soal 5
async function getPostDetails() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await result.json();
  if (result.status === 200) {
    console.log(data.title);
  } else {
    console.log("failed to fetch post");
  }
}

getPostDetails();

// soal 6
async function checkPostAvailability() {
  const result2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data2 = await result2.json();

  let hasil = result2.userId > 5 ? "post is available for user IDs greater than 5" : "post is not available for user IDs greater than 5";
  console.log(hasil);

  if (result2.userId > 5) {
    console.log("post is available for user IDs greater than 5");
  } else {
    console.log("post is not available for user IDs greater than 5");
  }
}

checkPostAvailability(); 