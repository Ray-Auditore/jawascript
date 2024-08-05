var nilai = 85  ;
var kehadiran = 10;
var totalPertemuan = 15;
var lulus = (kehadiran / totalPertemuan) * 100;

if (nilai >= 85) {
  if (lulus >= 75) {
    console.log("Kategori A : Lulus");
  } else {
    console.log("Kategori A : Tidak Lulus");
  }
} else if (nilai >= 70) {
  if (lulus >= 75) {
    console.log("Kategori B : Lulus");
  } else {
    console.log("Kategori B : Tidak Lulus");
  }
} else if (nilai >= 50) {
  if (lulus >= 75) {
    console.log("Kategori C : Lulus");
  } else {
    console.log("Kategori C : Tidak Lulus");
  }
} else {
  console.log("Kategori - : Tidak Lulus");
}   