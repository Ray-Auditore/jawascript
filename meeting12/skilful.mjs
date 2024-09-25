function mandi() {
    console.log("mandi");
<<<<<<< HEAD
}

function sarapan(callback) {
    console.log("Sarapan tertunda 3 detik");
    setTimeout(callback, 3000); // Menunda eksekusi callback selama 3 detik
}

function berangkatSekolah() {
    console.log("berangkat sekolah");
}

mandi(); // Akan mencetak "mandi"
sarapan(berangkatSekolah); // Akan mencetak "Sarapan tertunda 3 detik" dan setelah 3 detik mencetak "berangkat sekolah"
=======
  }
  
  function sarapan(callback) {
    console.log("Sarapan tertunda 3 detik");
    setTimeout(callback, 3000);
  }
  
  function berangkatSekolah() {
    console.log("berangkat sekolah");
  }
  
  mandi();
  sarapan(berangkatSekolah);
>>>>>>> a99df3630d13bfa382dfa644d0c990b1c80dc9c8
