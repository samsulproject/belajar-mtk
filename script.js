const $ = id => document.getElementById(id);

const PROFILE_KEY = "mathlearn_profile_v2";
const PROGRESS_KEY = "mathlearn_progress_v2";

const topics = [
  {
    id: 1,
    title: "Operasi Bilangan Bulat",
    category: "Dasar",
    icon: "＋",
    desc: "Penjumlahan, pengurangan, perkalian, dan pembagian bilangan bulat.",
    formula: "Aturan tanda",
    formulaDesc: "Tanda sama pada perkalian/pembagian menghasilkan positif; tanda berbeda menghasilkan negatif.",
    example: "−8 + 13",
    answer: "5",
    steps: [
      "Mulai dari −8, lalu bergerak 13 langkah ke arah positif.",
      "13 lebih besar dari 8, jadi hasilnya positif.",
      "13 − 8 = 5."
    ]
  },
  {
    id: 2,
    title: "Pecahan",
    category: "Dasar",
    icon: "½",
    desc: "Menyederhanakan pecahan dan melakukan operasi pecahan.",
    formula: "a/b + c/b = (a+c)/b",
    formulaDesc: "Jika penyebut sama, jumlahkan pembilangnya.",
    example: "1/4 + 2/4",
    answer: "3/4",
    steps: [
      "Penyebutnya sama, yaitu 4.",
      "Jumlahkan pembilang: 1 + 2 = 3.",
      "Hasilnya 3/4."
    ]
  },
  {
    id: 3,
    title: "Persentase",
    category: "Dasar",
    icon: "％",
    desc: "Menghitung persentase, diskon, dan bagian dari nilai.",
    formula: "Persentase = bagian / total × 100%",
    formulaDesc: "Gunakan rumus ini untuk membandingkan bagian dengan keseluruhan.",
    example: "20% dari 150",
    answer: "30",
    steps: [
      "20% = 20/100.",
      "Kalikan 20/100 × 150.",
      "Hasilnya 30."
    ]
  },
  {
    id: 4,
    title: "Perbandingan",
    category: "Dasar",
    icon: "↔",
    desc: "Membandingkan dua besaran dan perbandingan senilai.",
    formula: "a/b = c/d",
    formulaDesc: "Pada perbandingan senilai, hasil kali silang sama.",
    example: "Perbandingan 2 : 3, jika bagian pertama 8",
    answer: "12",
    steps: [
      "Nilai 2 menjadi 8, berarti dikali 4.",
      "Kalikan bagian kedua dengan faktor yang sama: 3 × 4.",
      "Bagian kedua adalah 12."
    ]
  },
  {
    id: 5,
    title: "FPB dan KPK",
    category: "Dasar",
    icon: "∩",
    desc: "Menentukan faktor dan kelipatan persekutuan.",
    formula: "FPB × KPK = a × b",
    formulaDesc: "Untuk dua bilangan positif, hasil kali FPB dan KPK sama dengan hasil kali kedua bilangan.",
    example: "FPB dari 12 dan 18",
    answer: "6",
    steps: [
      "Faktor 12: 1, 2, 3, 4, 6, 12.",
      "Faktor 18: 1, 2, 3, 6, 9, 18.",
      "Faktor terbesar yang sama adalah 6."
    ]
  },
  {
    id: 6,
    title: "Bilangan Berpangkat",
    category: "Aljabar",
    icon: "x²",
    desc: "Memahami pangkat dan sifat-sifat eksponen.",
    formula: "aᵐ × aⁿ = aᵐ⁺ⁿ",
    formulaDesc: "Jika basis sama dikalikan, pangkat dijumlahkan.",
    example: "2³ × 2²",
    answer: "32",
    steps: [
      "Basisnya sama, yaitu 2.",
      "Jumlahkan pangkat: 3 + 2 = 5.",
      "2⁵ = 32."
    ]
  },
  {
    id: 7,
    title: "Bentuk Akar",
    category: "Aljabar",
    icon: "√",
    desc: "Menyederhanakan bentuk akar dan operasi akar.",
    formula: "√(a × b) = √a × √b",
    formulaDesc: "Untuk bilangan nonnegatif, akar perkalian dapat dipisahkan.",
    example: "√49",
    answer: "7",
    steps: [
      "Cari bilangan yang dikalikan dengan dirinya menghasilkan 49.",
      "Karena 7 × 7 = 49, maka √49 = 7."
    ]
  },
  {
    id: 8,
    title: "Bentuk Aljabar",
    category: "Aljabar",
    icon: "x+y",
    desc: "Mengenali variabel, koefisien, konstanta, dan suku sejenis.",
    formula: "ax + bx = (a+b)x",
    formulaDesc: "Suku sejenis dapat digabung dengan menjumlahkan koefisien.",
    example: "3x + 5x − 2",
    answer: "8x − 2",
    steps: [
      "3x dan 5x adalah suku sejenis.",
      "Jumlahkan koefisien: 3 + 5 = 8.",
      "Bentuk sederhana adalah 8x − 2."
    ]
  },
  {
    id: 9,
    title: "Persamaan Linear Satu Variabel",
    category: "Aljabar",
    icon: "=",
    desc: "Menentukan nilai variabel dengan menjaga kedua ruas seimbang.",
    formula: "ax + b = c → x = (c−b)/a",
    formulaDesc: "Pindahkan konstanta dengan operasi kebalikan lalu bagi koefisien.",
    example: "2x + 4 = 14",
    answer: "x = 5",
    steps: [
      "Kurangi kedua ruas dengan 4: 2x = 10.",
      "Bagi kedua ruas dengan 2.",
      "Diperoleh x = 5."
    ]
  },
  {
    id: 10,
    title: "Sistem Persamaan Linear Dua Variabel",
    category: "Aljabar",
    icon: "{x,y}",
    desc: "Menyelesaikan dua persamaan dengan eliminasi atau substitusi.",
    formula: "ax + by = c",
    formulaDesc: "Gunakan dua persamaan untuk mencari nilai x dan y yang memenuhi keduanya.",
    example: "x + y = 7 dan x − y = 1",
    answer: "x = 4, y = 3",
    steps: [
      "Jumlahkan kedua persamaan: 2x = 8.",
      "Maka x = 4.",
      "Substitusikan ke x + y = 7, sehingga y = 3."
    ]
  },
  {
    id: 11,
    title: "Pertidaksamaan Linear",
    category: "Aljabar",
    icon: "≤",
    desc: "Menyelesaikan pertidaksamaan dan memahami perubahan tanda.",
    formula: "Jika dikali negatif, tanda berbalik",
    formulaDesc: "Saat kedua ruas dikali atau dibagi bilangan negatif, arah tanda berubah.",
    example: "x + 3 < 8",
    answer: "x < 5",
    steps: [
      "Kurangi kedua ruas dengan 3.",
      "Diperoleh x < 5.",
      "Semua nilai x kurang dari 5 memenuhi."
    ]
  },
  {
    id: 12,
    title: "Bangun Datar",
    category: "Geometri",
    icon: "△",
    desc: "Menghitung keliling dan luas bangun datar.",
    formula: "L persegi panjang = p × l",
    formulaDesc: "Luas persegi panjang adalah panjang dikalikan lebar.",
    example: "Panjang 8 cm, lebar 3 cm",
    answer: "24 cm²",
    steps: [
      "Gunakan L = p × l.",
      "Masukkan nilai: L = 8 × 3.",
      "Luasnya 24 cm²."
    ]
  },
  {
    id: 13,
    title: "Teorema Pythagoras",
    category: "Geometri",
    icon: "⊿",
    desc: "Menentukan sisi segitiga siku-siku.",
    formula: "a² + b² = c²",
    formulaDesc: "c adalah sisi miring yang berhadapan dengan sudut siku-siku.",
    example: "Sisi siku-siku 3 cm dan 4 cm",
    answer: "5 cm",
    steps: [
      "Gunakan c² = 3² + 4².",
      "c² = 9 + 16 = 25.",
      "c = √25 = 5 cm."
    ]
  },
  {
    id: 14,
    title: "Lingkaran",
    category: "Geometri",
    icon: "◯",
    desc: "Memahami jari-jari, diameter, keliling, dan luas.",
    formula: "K = 2πr; L = πr²",
    formulaDesc: "r adalah jari-jari; gunakan π ≈ 3,14 atau 22/7.",
    example: "Jari-jari 7 cm, π = 22/7",
    answer: "154 cm²",
    steps: [
      "Gunakan rumus L = πr².",
      "L = 22/7 × 7 × 7.",
      "Luasnya 154 cm²."
    ]
  },
  {
    id: 15,
    title: "Bangun Ruang",
    category: "Geometri",
    icon: "◇",
    desc: "Menghitung volume kubus, balok, prisma, dan tabung.",
    formula: "V balok = p × l × t",
    formulaDesc: "Volume balok didapat dari panjang dikali lebar dikali tinggi.",
    example: "Balok 4 × 3 × 2 cm",
    answer: "24 cm³",
    steps: [
      "Gunakan V = p × l × t.",
      "V = 4 × 3 × 2.",
      "Volume balok 24 cm³."
    ]
  },
  {
    id: 16,
    title: "Statistika: Rata-rata",
    category: "Statistika",
    icon: "x̄",
    desc: "Mencari mean, median, dan modus data.",
    formula: "Mean = jumlah data / banyak data",
    formulaDesc: "Jumlahkan nilai lalu bagi dengan banyaknya data.",
    example: "Data 4, 6, 8",
    answer: "6",
    steps: [
      "Jumlah data: 4 + 6 + 8 = 18.",
      "Ada 3 nilai.",
      "Mean = 18 ÷ 3 = 6."
    ]
  },
  {
    id: 17,
    title: "Peluang",
    category: "Statistika",
    icon: "◉",
    desc: "Menghitung kemungkinan kejadian sederhana.",
    formula: "P(A) = n(A) / n(S)",
    formulaDesc: "Peluang adalah hasil yang diinginkan dibagi semua hasil yang mungkin.",
    example: "Peluang angka genap pada dadu",
    answer: "1/2",
    steps: [
      "Angka genap pada dadu adalah 2, 4, 6.",
      "Ada 3 hasil dari total 6 hasil.",
      "Peluang = 3/6 = 1/2."
    ]
  },
  {
    id: 18,
    title: "Barisan Aritmetika",
    category: "Pola",
    icon: "＋",
    desc: "Mengenali pola dengan beda tetap dan mencari suku ke-n.",
    formula: "Uₙ = a + (n−1)b",
    formulaDesc: "a adalah suku pertama dan b adalah beda.",
    example: "3, 7, 11, ... suku ke-5",
    answer: "19",
    steps: [
      "Suku pertama a = 3 dan beda b = 4.",
      "U₅ = 3 + (5−1) × 4.",
      "U₅ = 19."
    ]
  },
  {
    id: 19,
    title: "Barisan Geometri",
    category: "Pola",
    icon: "×",
    desc: "Mengenali pola dengan rasio tetap.",
    formula: "Uₙ = a × rⁿ⁻¹",
    formulaDesc: "a adalah suku pertama dan r adalah rasio.",
    example: "2, 6, 18, ... suku ke-4",
    answer: "54",
    steps: [
      "Suku pertama a = 2, rasio r = 3.",
      "U₄ = 2 × 3³.",
      "U₄ = 54."
    ]
  },
  {
    id: 20,
    title: "Jarak, Kecepatan, Waktu",
    category: "Pola",
    icon: "↗",
    desc: "Menyelesaikan soal gerak dengan hubungan jarak, kecepatan, waktu.",
    formula: "J = v × t; v = J/t; t = J/v",
    formulaDesc: "Pastikan satuan konsisten, misalnya kilometer dan jam.",
    example: "Kecepatan 60 km/jam selama 2 jam",
    answer: "120 km",
    steps: [
      "Jarak = kecepatan × waktu.",
      "J = 60 × 2.",
      "Jaraknya 120 km."
    ]
  }
];

const extraFormulas = [
  ["Diskon", "Harga akhir = harga awal − diskon", "Hitung nilai diskon lalu kurangi dari harga awal."],
  ["Luas segitiga", "L = ½ × alas × tinggi", "Tinggi harus tegak lurus terhadap alas."],
  ["Keliling persegi", "K = 4s", "s adalah panjang sisi persegi."],
  ["Luas trapesium", "L = ½ × (a + b) × t", "a dan b adalah sisi sejajar."],
  ["Volume kubus", "V = s³", "s adalah panjang rusuk kubus."],
  ["Volume tabung", "V = πr²t", "Luas alas lingkaran dikali tinggi."],
  ["Peluang komplemen", "P(Aᶜ) = 1 − P(A)", "Peluang kejadian tidak terjadi."],
  ["Gradien garis", "m = (y₂ − y₁)/(x₂ − x₁)", "Perubahan y dibagi perubahan x."]
];

let profile = null;
let progress = {};

try {
  const savedProfile = JSON.parse(localStorage.getItem(PROFILE_KEY));

  if (
    savedProfile &&
    typeof savedProfile.name === "string" &&
    savedProfile.name.trim() &&
    ["10", "11", "12"].includes(String(savedProfile.studentClass))
  ) {
    profile = {
      name: savedProfile.name.trim(),
      studentClass: String(savedProfile.studentClass)
    };
  }
} catch (error) {
  profile = null;
}

try {
  progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
} catch (error) {
  progress = {};
}

const esc = value =>
  String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

function saveProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}