function mandi() {
    console.log("mandi");
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
