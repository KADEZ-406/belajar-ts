import { LearningPath } from "../types";

export const PYTHON_PATH: LearningPath = {
  language: "python",
  title: "Keahlian Python (Kurikulum 65 Materi Utuh)",
  description: "Kurikulum Python super-lengkap dari dasar sintaks, list, fungsi, OOP, hingga level Master data processing, REST API, dan automation.",
  icon: "file-code",
  sections: [
    {
      id: "py_sec_1",
      title: "01 Dasar Python & Tooling (7 Lesson)",
      description: "Sejarah Python, setup, sintaks bersih, print, variabel, komentar, dan ekosistem.",
      lessons: [
        {
          id: "py_l1_1",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "Apa itu Python & Mengapa Python?",
          description: "Mengenal sejarah, filosofi, dan keunggulan Python dibanding bahasa lain.",
          icon: "rocket",
          xp: 40,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Python: Bahasa Serbaguna",
              content: `Python dibuat oleh Guido van Rossum pada tahun 1991. Keunggulan Python:

- Sintaks bersih dan mudah dibaca seperti bahasa Inggris
- Library yang sangat kaya (NumPy, Pandas, Flask, Django, dll)
- Digunakan di: Web Backend, Data Science, AI/ML, Automation, Scripting`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_1_mc",
                type: "multiple_choice",
                prompt: "Siapakah pencipta bahasa pemrograman Python?",
                conceptGuide: "Python dibuat oleh seorang programmer Belanda.",
                options: ["Guido van Rossum", "Linus Torvalds", "James Gosling", "Brendan Eich"],
                correctAnswer: 0,
                explanation: "Tepat! Python dibuat oleh Guido van Rossum tahun 1991.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_1_tf",
                type: "true_false",
                prompt: "Apakah Python menggunakan indentasi (spasi) sebagai pengganti kurung kurawal {} untuk mendefinisikan blok kode?",
                conceptGuide: "Python menggunakan indentasi sebagai struktur blok kode.",
                statement: "Python menggunakan indentasi sebagai struktur blok kode.",
                correctAnswer: true,
                explanation: "Tepat! Indentasi di Python bukan opsional, melainkan WAJIB.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_1_cc",
                type: "code_challenge",
                prompt: "Cetak pesan 'Halo Python!' ke konsol!",
                conceptGuide: "Gunakan `print(\"Halo Python!\")` untuk mencetak teks.",
                starterCode: `print("Halo Python!")`,
                expectedOutput: "Halo Python!",
                explanation: "Selamat memulai perjalanan Python!",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l1_2",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "Variabel & Tipe Data Dasar",
          description: "Mendefinisikan variabel Python dengan dynamic typing dan mengenal tipe dasar.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Variabel di Python",
              content: `Python menggunakan dynamic typing — tipe variabel ditentukan otomatis dari nilainya:

\`\`\`python
nama = "Kadez"        # str
umur = 25             # int
tinggi = 175.5        # float
is_pelajar = True     # bool
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_2_mc",
                type: "multiple_choice",
                prompt: "Apakah tipe data dari nilai 3.14 di Python?",
                conceptGuide: "Bilangan desimal di Python bertipe float.",
                options: ["float", "int", "str", "double"],
                correctAnswer: 0,
                explanation: "Tepat! Bilangan desimal di Python bertipe float.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_2_po",
                type: "predict_output",
                prompt: "Apakah tipe yang dikembalikan oleh type() dari variabel skor = 100?",
                conceptGuide: "Bilangan bulat Python bertipe int.",
                code: `skor = 100\nprint(type(skor))`,
                options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
                correctAnswer: "<class 'int'>",
                explanation: "Bener! 100 adalah integer di Python.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_2_cc",
                type: "code_challenge",
                prompt: "Buat variabel bahasa = 'Python'. Cetak nilainya!",
                conceptGuide: "Tulis `bahasa = \"Python\"` lalu `print(bahasa)`.",
                starterCode: `bahasa = "Python"\nprint(bahasa)`,
                expectedOutput: "Python",
                explanation: "Keren! Variabel Python berhasil dibuat.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l1_3",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "Print, Input & Komentar",
          description: "Menampilkan output, menerima input pengguna, dan menulis komentar kode.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Fungsi print() dan Komentar",
              content: `\`\`\`python
# Komentar satu baris dengan tanda pagar

"""
Komentar
multi-baris dengan triple quotes
"""

nama = "Budi"
print(f"Halo, {nama}!")   # f-string untuk interpolasi
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_3_mc",
                type: "multiple_choice",
                prompt: "Simbol apakah yang digunakan untuk memulai komentar satu baris di Python?",
                conceptGuide: "Komentar Python menggunakan tanda pagar.",
                options: ["# (tanda pagar)", "// (double slash)", "/* */", "-- (double dash)"],
                correctAnswer: 0,
                explanation: "Tepat! `#` adalah tanda komentar satu baris Python.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_3_po",
                type: "predict_output",
                prompt: "Apakah output dari f-string berikut?",
                conceptGuide: "f-string menyisipkan nilai variabel ke dalam string.",
                code: `kota = "Bandung"\nprint(f"Saya dari {kota}")`,
                options: ["Saya dari Bandung", "Saya dari {kota}", "f-string error", "Bandung"],
                correctAnswer: "Saya dari Bandung",
                explanation: "Bener! f-string menyisipkan nilai kota ke teks.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_3_cc",
                type: "code_challenge",
                prompt: "Buat variabel produk = 'Laptop'. Cetak 'Produk: Laptop' menggunakan f-string!",
                conceptGuide: "Tulis `produk = \"Laptop\"` lalu `print(f\"Produk: {produk}\")`.",
                starterCode: `produk = "Laptop"\nprint(f"Produk: {produk}")`,
                expectedOutput: "Produk: Laptop",
                explanation: "Super! F-string Python berhasil digunakan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l1_4",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "Operator Aritmatika & Perbandingan",
          description: "Melakukan kalkulasi matematika dan membandingkan nilai menggunakan operator Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Operator di Python",
              content: `\`\`\`python
# Aritmatika
print(10 + 3)   # 13
print(10 - 3)   # 7
print(10 * 3)   # 30
print(10 / 3)   # 3.333...
print(10 // 3)  # 3 (floor division)
print(10 % 3)   # 1 (modulo)
print(2 ** 10)  # 1024 (pangkat)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_4_mc",
                type: "multiple_choice",
                prompt: "Operator apakah yang digunakan untuk operasi perpangkatan di Python?",
                conceptGuide: "Python menggunakan ** untuk perpangkatan, bukan ^.",
                options: ["** (double asterisk)", "^ (caret)", "pow()", "exp()"],
                correctAnswer: 0,
                explanation: "Tepat! `**` adalah operator pangkat Python.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_4_po",
                type: "predict_output",
                prompt: "Apakah hasil dari operasi 17 // 5 di Python?",
                conceptGuide: "// adalah floor division yang membulatkan ke bawah.",
                code: `print(17 // 5)`,
                options: ["3", "3.4", "2", "4"],
                correctAnswer: "3",
                explanation: "Bener! 17 // 5 = 3 (floor division).",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_4_cc",
                type: "code_challenge",
                prompt: "Hitung 2 pangkat 8 dan cetak hasilnya!",
                conceptGuide: "Tulis `print(2 ** 8)`.",
                starterCode: `print(2 ** 8)`,
                expectedOutput: "256",
                explanation: "Sip! Operator perpangkatan Python berhasil digunakan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l1_5",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "Percabangan: if, elif, else",
          description: "Mengontrol alur program menggunakan percabangan kondisional Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Percabangan Python",
              content: `\`\`\`python
nilai = 75

if nilai >= 90:
    print("Sempurna")
elif nilai >= 70:
    print("Lulus")
else:
    print("Perlu Belajar Lagi")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_5_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan untuk percabangan tambahan setelah blok if di Python?",
                conceptGuide: "elif adalah gabungan 'else if' di Python.",
                options: ["elif", "else if", "elseif", "elsif"],
                correctAnswer: 0,
                explanation: "Tepat! Python menggunakan `elif` bukan `else if`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_5_po",
                type: "predict_output",
                prompt: "Apakah output dari percabangan berikut jika suhu = 35?",
                conceptGuide: "Suhu 35 >= 30 -> masuk kondisi pertama.",
                code: `suhu = 35\nif suhu >= 30:\n    print("Panas")\nelse:\n    print("Sejuk")`,
                options: ["Panas", "Sejuk", "Error", "None"],
                correctAnswer: "Panas",
                explanation: "Bener! suhu 35 >= 30 -> Panas.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_5_cc",
                type: "code_challenge",
                prompt: "Buat variabel skor = 85. Cetak 'Lulus' jika >= 70, 'Gagal' jika kurang!",
                conceptGuide: "Tulis `skor = 85` lalu `if skor >= 70: print(\"Lulus\")` dst.",
                starterCode: `skor = 85\nif skor >= 70:\n    print("Lulus")\nelse:\n    print("Gagal")`,
                expectedOutput: "Lulus",
                explanation: "Mantap! Percabangan Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l1_6",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "Perulangan: for & while",
          description: "Mengulangi eksekusi kode menggunakan loop for range dan while di Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Perulangan Python",
              content: `\`\`\`python
# for dengan range
for i in range(5):
    print(i)  # 0 1 2 3 4

# while loop
hitung = 0
while hitung < 3:
    print(hitung)
    hitung += 1
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_6_mc",
                type: "multiple_choice",
                prompt: "Berapa kali iterasi yang dilakukan oleh for i in range(5)?",
                conceptGuide: "range(5) menghasilkan 0, 1, 2, 3, 4 — total 5 iterasi.",
                options: ["5 kali (0 sampai 4)", "4 kali (1 sampai 4)", "6 kali (0 sampai 5)", "Tergantung input"],
                correctAnswer: 0,
                explanation: "Tepat! range(5) mengiterasi 5 kali dari 0 sampai 4.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_6_po",
                type: "predict_output",
                prompt: "Apakah angka terakhir yang dicetak oleh for i in range(1, 4)?",
                conceptGuide: "range(1, 4) menghasilkan 1, 2, 3 — angka terakhir adalah 3.",
                code: `for i in range(1, 4):\n    pass\nprint(i)`,
                options: ["3", "4", "1", "Error"],
                correctAnswer: "3",
                explanation: "Bener! range(1, 4) berhenti sebelum 4, jadi terakhir adalah 3.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_6_cc",
                type: "code_challenge",
                prompt: "Gunakan for loop untuk mencetak jumlah (sum) dari range(1, 6) yaitu 1+2+3+4+5!",
                conceptGuide: "Tulis `total = 0` lalu loop `for i in range(1, 6): total += i` kemudian `print(total)`.",
                starterCode: `total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)`,
                expectedOutput: "15",
                explanation: "Super! Perulangan Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l1_7",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Dasar Python & Tooling",
          title: "String Methods & Manipulasi",
          description: "Menggunakan berbagai metode bawaan Python untuk memanipulasi string.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "String Methods",
              content: `\`\`\`python
teks = "halo python"

print(teks.upper())        # HALO PYTHON
print(teks.capitalize())   # Halo python
print(teks.replace("halo", "selamat"))  # selamat python
print(teks.split(" "))     # ['halo', 'python']
print(len(teks))           # 11
print(teks.strip())        # hapus whitespace kiri & kanan
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1_7_mc",
                type: "multiple_choice",
                prompt: "Method string Python apakah yang memisahkan string menjadi list berdasarkan delimiter?",
                conceptGuide: "split() memisahkan string berdasarkan pemisah yang ditentukan.",
                options: [".split()", ".divide()", ".separate()", ".break()"],
                correctAnswer: 0,
                explanation: "Tepat! `.split()` memisahkan string menjadi list.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_1_7_po",
                type: "predict_output",
                prompt: "Apakah output dari teks.upper() jika teks = 'python'?",
                conceptGuide: ".upper() mengkonversi semua karakter ke huruf kapital.",
                code: `teks = "python"\nprint(teks.upper())`,
                options: ["PYTHON", "Python", "python", "Error"],
                correctAnswer: "PYTHON",
                explanation: "Bener! .upper() mengubah semua karakter menjadi huruf besar.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_1_7_cc",
                type: "code_challenge",
                prompt: "Buat string kalimat = 'belajar python itu seru'. Cetak panjang karakternya!",
                conceptGuide: "Tulis `kalimat = \"belajar python itu seru\"` lalu `print(len(kalimat))`.",
                starterCode: `kalimat = "belajar python itu seru"\nprint(len(kalimat))`,
                expectedOutput: "22",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 01 Dasar Python!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_2",
      title: "02 List, Tuple & Dictionary (7 Lesson)",
      description: "Struktur data Python: list, tuple, set, dictionary, dan operasi dasarnya.",
      lessons: [
        {
          id: "py_l2_1",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "List & Operasi Dasar",
          description: "Menyimpan koleksi data yang dapat diubah menggunakan tipe data list Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l1_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "List Python",
              content: `\`\`\`python
buah = ["Apel", "Jeruk", "Mangga"]

# Akses elemen
print(buah[0])      # Apel
print(buah[-1])     # Mangga (dari belakang)

# Modifikasi
buah.append("Pisang")     # Tambah di akhir
buah.remove("Jeruk")      # Hapus berdasarkan nilai
buah.insert(1, "Anggur")  # Sisipkan di indeks 1
print(len(buah))          # Panjang list
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_1_mc",
                type: "multiple_choice",
                prompt: "Method Python apakah yang digunakan untuk menambahkan elemen baru di akhir list?",
                conceptGuide: "append() menambahkan elemen di akhir list secara in-place.",
                options: [".append()", ".push()", ".add()", ".insert()"],
                correctAnswer: 0,
                explanation: "Tepat! `.append()` menambahkan elemen di akhir list.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_1_po",
                type: "predict_output",
                prompt: "Apakah output dari akses elemen terakhir list dengan indeks -1?",
                conceptGuide: "Indeks negatif mengakses dari belakang, -1 adalah elemen terakhir.",
                code: `angka = [10, 20, 30, 40]\nprint(angka[-1])`,
                options: ["40", "10", "30", "Error"],
                correctAnswer: "40",
                explanation: "Bener! Indeks -1 adalah elemen terakhir yaitu 40.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_1_cc",
                type: "code_challenge",
                prompt: "Buat list kota = ['Jakarta', 'Bandung']. Tambahkan 'Surabaya' lalu cetak panjang list!",
                conceptGuide: "Tulis `kota = [\"Jakarta\", \"Bandung\"]; kota.append(\"Surabaya\"); print(len(kota))`.",
                starterCode: `kota = ["Jakarta", "Bandung"]\nkota.append("Surabaya")\nprint(len(kota))`,
                expectedOutput: "3",
                explanation: "Sip! List Python berhasil dioperasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l2_2",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "List Comprehension",
          description: "Membuat list baru dengan ekspresi ringkas satu baris menggunakan list comprehension.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l2_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "List Comprehension",
              content: `\`\`\`python
# Cara lama (loop biasa)
kuadrat = []
for i in range(1, 6):
    kuadrat.append(i ** 2)

# List comprehension (satu baris)
kuadrat = [i ** 2 for i in range(1, 6)]
# [1, 4, 9, 16, 25]

# Dengan filter
genap = [i for i in range(10) if i % 2 == 0]
# [0, 2, 4, 6, 8]
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_2_mc",
                type: "multiple_choice",
                prompt: "Apakah keunggulan list comprehension dibanding loop for biasa untuk membuat list?",
                conceptGuide: "List comprehension lebih ringkas dan umumnya lebih cepat dari loop biasa.",
                options: [
                  "Lebih ringkas dan umumnya lebih cepat",
                  "Bisa membuat list lebih besar",
                  "Tidak ada perbedaan",
                  "Lebih mudah di-debug",
                ],
                correctAnswer: 0,
                explanation: "Tepat! List comprehension lebih ringkas dan efisien.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_2_po",
                type: "predict_output",
                prompt: "Apakah output dari list comprehension [x*2 for x in range(1, 4)]?",
                conceptGuide: "Kalikan setiap angka 1, 2, 3 dengan 2.",
                code: `hasil = [x*2 for x in range(1, 4)]\nprint(hasil)`,
                options: ["[2, 4, 6]", "[1, 2, 3]", "[2, 4, 6, 8]", "Error"],
                correctAnswer: "[2, 4, 6]",
                explanation: "Bener! [1*2, 2*2, 3*2] = [2, 4, 6].",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_2_cc",
                type: "code_challenge",
                prompt: "Buat list comprehension dari range(1, 6) yang hanya mengambil bilangan ganjil. Cetak hasilnya!",
                conceptGuide: "Tulis `ganjil = [i for i in range(1, 6) if i % 2 != 0]` lalu `print(ganjil)`.",
                starterCode: `ganjil = [i for i in range(1, 6) if i % 2 != 0]\nprint(ganjil)`,
                expectedOutput: "[1, 3, 5]",
                explanation: "Keren! List comprehension dengan filter berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l2_3",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "Tuple & Immutability",
          description: "Memahami tuple sebagai koleksi data yang tidak dapat diubah di Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l2_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tuple Python",
              content: `\`\`\`python
# Tuple: koleksi yang TIDAK dapat diubah
koordinat = (10.5, -6.8)  # Lat, Long
warna_rgb = (255, 128, 0)

# Akses seperti list
print(koordinat[0])  # 10.5

# Tuple unpacking
lat, lon = koordinat
print(lat, lon)  # 10.5 -6.8
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_3_mc",
                type: "multiple_choice",
                prompt: "Apa perbedaan utama antara tuple dan list di Python?",
                conceptGuide: "Tuple tidak bisa dimodifikasi (immutable), list bisa dimodifikasi (mutable).",
                options: [
                  "Tuple immutable (tidak bisa diubah), list mutable (bisa diubah)",
                  "Tuple lebih cepat dari list dalam semua operasi",
                  "Tuple menggunakan {}, list menggunakan []",
                  "Tuple hanya bisa menyimpan angka",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Tuple immutable, list mutable.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_3_tf",
                type: "true_false",
                prompt: "Apakah elemen tuple di Python dapat diubah nilainya setelah tuple dibuat?",
                conceptGuide: "Tuple adalah immutable — elemen tidak bisa diubah setelah dibuat.",
                statement: "Elemen tuple dapat diubah nilainya setelah tuple dibuat.",
                correctAnswer: false,
                explanation: "Tepat! Tuple TIDAK bisa diubah nilainya (immutable).",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_3_cc",
                type: "code_challenge",
                prompt: "Buat tuple posisi = (100, 200). Lakukan unpacking ke variabel x dan y. Cetak x!",
                conceptGuide: "Tulis `posisi = (100, 200); x, y = posisi; print(x)`.",
                starterCode: `posisi = (100, 200)\nx, y = posisi\nprint(x)`,
                expectedOutput: "100",
                explanation: "Super! Tuple dan unpacking berhasil dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l2_4",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "Dictionary: Key-Value Store",
          description: "Menyimpan dan mengakses data berpasangan kunci-nilai menggunakan dictionary Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l2_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Dictionary Python",
              content: `\`\`\`python
mahasiswa = {
    "nama": "Budi",
    "nim": "12345",
    "ipk": 3.75
}

# Akses nilai
print(mahasiswa["nama"])         # Budi
print(mahasiswa.get("nim"))      # 12345

# Tambah/update
mahasiswa["jurusan"] = "IT"

# Hapus
del mahasiswa["nim"]
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_4_mc",
                type: "multiple_choice",
                prompt: "Method dictionary apakah yang lebih aman untuk mengakses nilai agar tidak menghasilkan KeyError jika key tidak ada?",
                conceptGuide: ".get() mengembalikan None jika key tidak ditemukan, tidak throw error.",
                options: [".get(key)", "dict[key]", ".fetch(key)", ".find(key)"],
                correctAnswer: 0,
                explanation: "Tepat! `.get()` tidak throw KeyError jika key tidak ada.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_4_po",
                type: "predict_output",
                prompt: "Apakah output dari dictionary access berikut?",
                conceptGuide: "Akses key 'harga' dari dictionary produk.",
                code: `produk = {"nama": "Mouse", "harga": 150000}\nprint(produk["harga"])`,
                options: ["150000", "Mouse", "None", "KeyError"],
                correctAnswer: "150000",
                explanation: "Bener! produk['harga'] = 150000.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_4_cc",
                type: "code_challenge",
                prompt: "Buat dictionary user = { 'nama': 'Kadez', 'level': 1 }. Tambahkan key 'xp' = 500, lalu cetak user['xp']!",
                conceptGuide: "Tulis `user = {\"nama\": \"Kadez\", \"level\": 1}; user[\"xp\"] = 500; print(user[\"xp\"])`.",
                starterCode: `user = {"nama": "Kadez", "level": 1}\nuser["xp"] = 500\nprint(user["xp"])`,
                expectedOutput: "500",
                explanation: "Mantap! Dictionary Python berhasil dioperasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l2_5",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "Dictionary Methods & Iterasi",
          description: "Mengiterasi dictionary dan menggunakan method .keys(), .values(), .items().",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l2_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Iterasi Dictionary",
              content: `\`\`\`python
config = {"host": "localhost", "port": 5432, "db": "myapp"}

# Iterasi key
for key in config.keys():
    print(key)

# Iterasi value
for val in config.values():
    print(val)

# Iterasi key & value
for key, val in config.items():
    print(f"{key}: {val}")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_5_mc",
                type: "multiple_choice",
                prompt: "Method dictionary apakah yang mengembalikan semua pasangan key-value sebagai tuple?",
                conceptGuide: ".items() mengembalikan dict_items berisi tuple (key, value).",
                options: [".items()", ".pairs()", ".entries()", ".kv()"],
                correctAnswer: 0,
                explanation: "Tepat! `.items()` mengembalikan pasangan (key, value).",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_5_po",
                type: "predict_output",
                prompt: "Berapa banyak pasangan yang dicetak dari iterasi .items() dictionary berikut?",
                conceptGuide: "Dictionary dengan 3 key menghasilkan 3 pasangan items.",
                code: `data = {"a": 1, "b": 2, "c": 3}\ncount = 0\nfor k, v in data.items():\n    count += 1\nprint(count)`,
                options: ["3", "1", "6", "Error"],
                correctAnswer: "3",
                explanation: "Bener! Dictionary 3 key menghasilkan 3 pasangan items.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_5_cc",
                type: "code_challenge",
                prompt: "Buat dictionary nilai = {'Matematika': 90, 'IPA': 85, 'Bahasa': 88}. Cetak jumlah semua nilai dengan sum()!",
                conceptGuide: "Tulis `nilai = {'Matematika': 90, 'IPA': 85, 'Bahasa': 88}; print(sum(nilai.values()))`.",
                starterCode: `nilai = {"Matematika": 90, "IPA": 85, "Bahasa": 88}\nprint(sum(nilai.values()))`,
                expectedOutput: "263",
                explanation: "Keren! Iterasi dictionary values berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l2_6",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "Set & Operasi Himpunan",
          description: "Menggunakan set Python untuk koleksi unik tanpa duplikat dan operasi himpunan.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l2_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Set Python",
              content: `\`\`\`python
# Set: koleksi UNIK tanpa duplikat, tidak terurut
hewan = {"kucing", "anjing", "burung"}
hewan.add("kelinci")
hewan.discard("anjing")

# Operasi himpunan
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A | B)  # Union: {1, 2, 3, 4, 5, 6}
print(A & B)  # Intersection: {3, 4}
print(A - B)  # Difference: {1, 2}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_6_mc",
                type: "multiple_choice",
                prompt: "Apakah yang terjadi jika kita menambahkan elemen yang sudah ada ke dalam set Python?",
                conceptGuide: "Set hanya menyimpan elemen unik, duplikat diabaikan.",
                options: [
                  "Elemen diabaikan, set tidak berubah",
                  "Elemen ditambahkan duplikat",
                  "Menghasilkan error",
                  "Set direset",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Set mengabaikan duplikat secara otomatis.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_6_po",
                type: "predict_output",
                prompt: "Berapa panjang set dari list [1, 2, 2, 3, 3, 3]?",
                conceptGuide: "Set menghilangkan duplikat, hanya menyimpan nilai unik.",
                code: `data = [1, 2, 2, 3, 3, 3]\nprint(len(set(data)))`,
                options: ["3", "6", "1", "Error"],
                correctAnswer: "3",
                explanation: "Bener! set({1,2,3}) = 3 elemen unik.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_6_cc",
                type: "code_challenge",
                prompt: "Buat set A = {1,2,3,4} dan B = {3,4,5,6}. Cetak irisan (intersection) keduanya!",
                conceptGuide: "Tulis `A = {1,2,3,4}; B = {3,4,5,6}; print(A & B)`.",
                starterCode: `A = {1, 2, 3, 4}\nB = {3, 4, 5, 6}\nprint(A & B)`,
                expectedOutput: "{3, 4}",
                explanation: "Super! Operasi himpunan Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l2_7",
          language: "python",
          sectionId: "py_sec_2",
          sectionTitle: "02 List, Tuple & Dictionary",
          title: "Slicing & Advanced Indexing",
          description: "Mengambil subset list atau string menggunakan slicing Python yang powerful.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l2_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Python Slicing",
              content: `\`\`\`python
data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(data[2:5])    # [2, 3, 4]
print(data[:3])     # [0, 1, 2]
print(data[7:])     # [7, 8, 9]
print(data[-3:])    # [7, 8, 9]
print(data[::2])    # [0, 2, 4, 6, 8] (step 2)
print(data[::-1])   # [9, 8, ..., 0] (reverse)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_2_7_mc",
                type: "multiple_choice",
                prompt: "Apakah yang dihasilkan oleh slicing data[::-1] pada list?",
                conceptGuide: "Step -1 mengiterasi dari belakang, menghasilkan list terbalik.",
                options: [
                  "List terbalik (reversed)",
                  "List kosong",
                  "Elemen terakhir saja",
                  "Error",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `[::-1]` menghasilkan list yang terbalik.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2_7_po",
                type: "predict_output",
                prompt: "Apakah output dari slicing [1, 2, 3, 4, 5][1:4]?",
                conceptGuide: "Slicing [1:4] mengambil indeks 1, 2, 3.",
                code: `data = [1, 2, 3, 4, 5]\nprint(data[1:4])`,
                options: ["[2, 3, 4]", "[1, 2, 3]", "[2, 3, 4, 5]", "Error"],
                correctAnswer: "[2, 3, 4]",
                explanation: "Bener! [1:4] mengambil indeks 1, 2, 3 yaitu [2, 3, 4].",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_2_7_cc",
                type: "code_challenge",
                prompt: "Balikkan string 'Python' menggunakan slicing dan cetak hasilnya!",
                conceptGuide: "Tulis `teks = \"Python\"; print(teks[::-1])`.",
                starterCode: `teks = "Python"\nprint(teks[::-1])`,
                expectedOutput: "nohtyP",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 02 List, Tuple & Dictionary!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_3",
      title: "03 Fungsi & Modul (7 Lesson)",
      description: "Fungsi dasar, parameter, return value, scope, lambda, *args/**kwargs, dan module import.",
      lessons: [
        {
          id: "py_l3_1",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "Definisi Fungsi & Return Value",
          description: "Mendefinisikan fungsi Python dengan parameter dan nilai kembalian yang jelas.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l2_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Fungsi Python",
              content: `\`\`\`python
def sapa(nama: str) -> str:
    return f"Halo, {nama}!"

pesan = sapa("Kadez")
print(pesan)  # Halo, Kadez!
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_1_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan untuk mendefinisikan fungsi di Python?",
                conceptGuide: "Fungsi Python didefinisikan dengan kata kunci def.",
                options: ["def", "function", "func", "fn"],
                correctAnswer: 0,
                explanation: "Tepat! `def` adalah kata kunci untuk mendefinisikan fungsi Python.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_1_po",
                type: "predict_output",
                prompt: "Apakah output dari pemanggilan fungsi kalikan(3, 4)?",
                conceptGuide: "Fungsi mengalikan dua angka dan mengembalikan hasilnya.",
                code: `def kalikan(a, b):\n    return a * b\nprint(kalikan(3, 4))`,
                options: ["12", "7", "34", "Error"],
                correctAnswer: "12",
                explanation: "Bener! 3 * 4 = 12.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_1_cc",
                type: "code_challenge",
                prompt: "Buat fungsi kuadrat(n) yang mengembalikan n ** 2. Cetak kuadrat(7)!",
                conceptGuide: "Tulis `def kuadrat(n): return n ** 2` lalu `print(kuadrat(7))`.",
                starterCode: `def kuadrat(n):\n    return n ** 2\nprint(kuadrat(7))`,
                expectedOutput: "49",
                explanation: "Sip! Fungsi Python dengan return value berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l3_2",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "Default & Keyword Arguments",
          description: "Mendefinisikan nilai default parameter dan memanggil fungsi dengan keyword arguments.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l3_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Default & Keyword Args",
              content: `\`\`\`python
def buat_user(nama: str, role: str = "user", aktif: bool = True):
    return f"{nama} | {role} | Aktif: {aktif}"

print(buat_user("Kadez"))              # Kadez | user | Aktif: True
print(buat_user("Budi", role="admin")) # Budi | admin | Aktif: True
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_2_mc",
                type: "multiple_choice",
                prompt: "Di posisi manakah parameter dengan nilai default harus ditempatkan dalam definisi fungsi?",
                conceptGuide: "Parameter default harus diletakkan setelah semua parameter non-default.",
                options: [
                  "Setelah semua parameter tanpa default",
                  "Di awal definisi fungsi",
                  "Di mana saja bebas",
                  "Hanya satu parameter saja",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Parameter default harus berada setelah parameter non-default.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_2_po",
                type: "predict_output",
                prompt: "Apakah output dari pemanggilan sapa('Budi') dengan fungsi yang memiliki default role?",
                conceptGuide: "Parameter tanpa argumen menggunakan nilai default.",
                code: `def sapa(nama, role="pelajar"):\n    return f"{nama} adalah {role}"\nprint(sapa("Budi"))`,
                options: ["Budi adalah pelajar", "Budi adalah None", "Error", "Budi"],
                correctAnswer: "Budi adalah pelajar",
                explanation: "Bener! role menggunakan nilai default 'pelajar'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_2_cc",
                type: "code_challenge",
                prompt: "Buat fungsi diskon(harga, persen=10) yang mengembalikan harga setelah diskon. Cetak diskon(100000)!",
                conceptGuide: "Tulis `def diskon(harga, persen=10): return harga - (harga * persen / 100)` lalu `print(diskon(100000))`.",
                starterCode: `def diskon(harga, persen=10):\n    return harga - (harga * persen / 100)\nprint(diskon(100000))`,
                expectedOutput: "90000.0",
                explanation: "Super! Default arguments Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l3_3",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "*args & **kwargs",
          description: "Menerima jumlah argumen yang tidak terbatas menggunakan *args dan **kwargs.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l3_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "*args & **kwargs",
              content: `\`\`\`python
# *args: positional arguments tak terbatas
def jumlahkan(*angka):
    return sum(angka)

print(jumlahkan(1, 2, 3, 4))  # 10

# **kwargs: keyword arguments tak terbatas
def info_user(**data):
    for k, v in data.items():
        print(f"{k}: {v}")

info_user(nama="Kadez", level=5)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_3_mc",
                type: "multiple_choice",
                prompt: "Tipe data apakah yang mewakili *args di dalam fungsi Python?",
                conceptGuide: "*args dikumpulkan menjadi tuple di dalam fungsi.",
                options: ["Tuple", "List", "Dictionary", "Set"],
                correctAnswer: 0,
                explanation: "Tepat! *args adalah tuple di dalam fungsi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_3_po",
                type: "predict_output",
                prompt: "Apakah output dari fungsi dengan *args berikut?",
                conceptGuide: "sum() menjumlahkan semua elemen dari *angka tuple.",
                code: `def total(*angka):\n    return sum(angka)\nprint(total(5, 10, 15))`,
                options: ["30", "5", "15", "Error"],
                correctAnswer: "30",
                explanation: "Bener! 5+10+15 = 30.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_3_cc",
                type: "code_challenge",
                prompt: "Buat fungsi gabung(*kata) yang mengembalikan semua kata digabung dengan spasi. Cetak gabung('Python', 'Itu', 'Keren')!",
                conceptGuide: "Tulis `def gabung(*kata): return \" \".join(kata)` lalu `print(gabung(\"Python\", \"Itu\", \"Keren\"))`.",
                starterCode: `def gabung(*kata):\n    return " ".join(kata)\nprint(gabung("Python", "Itu", "Keren"))`,
                expectedOutput: "Python Itu Keren",
                explanation: "Keren! *args Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l3_4",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "Lambda & Higher-Order Functions",
          description: "Membuat fungsi anonim dengan lambda dan menggunakan map, filter, reduce.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l3_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Lambda & HOF",
              content: `\`\`\`python
# Lambda: fungsi anonim satu baris
kuadrat = lambda x: x ** 2
print(kuadrat(5))  # 25

# map: terapkan fungsi ke setiap elemen
hasil = list(map(lambda x: x * 2, [1, 2, 3]))
# [2, 4, 6]

# filter: saring elemen
genap = list(filter(lambda x: x % 2 == 0, range(10)))
# [0, 2, 4, 6, 8]
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_4_mc",
                type: "multiple_choice",
                prompt: "Fungsi Python built-in apakah yang menerapkan sebuah fungsi ke setiap elemen iterable?",
                conceptGuide: "map() menerapkan fungsi ke setiap elemen dan mengembalikan iterator.",
                options: ["map()", "apply()", "foreach()", "transform()"],
                correctAnswer: 0,
                explanation: "Tepat! `map()` menerapkan fungsi ke setiap elemen.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_4_po",
                type: "predict_output",
                prompt: "Apakah output dari map() berikut?",
                conceptGuide: "Kalikan setiap elemen dengan 3.",
                code: `hasil = list(map(lambda x: x * 3, [1, 2, 3]))\nprint(hasil)`,
                options: ["[3, 6, 9]", "[1, 2, 3]", "[4, 5, 6]", "Error"],
                correctAnswer: "[3, 6, 9]",
                explanation: "Bener! [1*3, 2*3, 3*3] = [3, 6, 9].",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_4_cc",
                type: "code_challenge",
                prompt: "Filter list [5, 12, 3, 18, 7, 20] hanya yang lebih besar dari 10. Cetak hasilnya!",
                conceptGuide: "Tulis `data = [5, 12, 3, 18, 7, 20]` lalu `print(list(filter(lambda x: x > 10, data)))`.",
                starterCode: `data = [5, 12, 3, 18, 7, 20]\nprint(list(filter(lambda x: x > 10, data)))`,
                expectedOutput: "[12, 18, 20]",
                explanation: "Mantap! Lambda & filter berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l3_5",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "Scope, Closure & Decorator",
          description: "Memahami scope variabel, closure, dan decorator sebagai higher-order function.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l3_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Closure & Decorator",
              content: `\`\`\`python
# Closure: fungsi yang mengingat environment-nya
def pembuat_penghitung(mulai):
    count = mulai
    def tambah():
        nonlocal count
        count += 1
        return count
    return tambah

hitung = pembuat_penghitung(0)
print(hitung())  # 1
print(hitung())  # 2
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_5_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang digunakan agar fungsi inner dapat memodifikasi variabel dari fungsi outer di Python?",
                conceptGuide: "nonlocal memungkinkan inner function memodifikasi variabel outer.",
                options: ["nonlocal", "global", "outer", "upvar"],
                correctAnswer: 0,
                explanation: "Tepat! `nonlocal` mengakses variabel dari enclosing scope.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_5_tf",
                type: "true_false",
                prompt: "Apakah decorator Python pada dasarnya adalah fungsi yang menerima fungsi lain sebagai argumen dan mengembalikan fungsi baru?",
                conceptGuide: "Decorator adalah higher-order function yang membungkus fungsi lain.",
                statement: "Decorator adalah fungsi yang menerima fungsi dan mengembalikan fungsi baru.",
                correctAnswer: true,
                explanation: "Tepat! Decorator adalah higher-order function yang membungkus fungsi.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_5_cc",
                type: "code_challenge",
                prompt: "Buat closure counter: fungsi buat_counter() mengembalikan fungsi yang menghitung berapa kali dipanggil. Cetak count setelah 3 panggilan!",
                conceptGuide: "Tulis `def buat_counter():\n    count = 0\n    def tambah():\n        nonlocal count\n        count += 1\n        return count\n    return tambah\nc = buat_counter()\nc(); c(); print(c())`.",
                starterCode: `def buat_counter():\n    count = 0\n    def tambah():\n        nonlocal count\n        count += 1\n        return count\n    return tambah\nc = buat_counter()\nc()\nc()\nprint(c())`,
                expectedOutput: "3",
                explanation: "Super! Closure Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l3_6",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "Import Modul & Standard Library",
          description: "Menggunakan modul bawaan Python seperti math, random, datetime, dan os.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l3_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Python Standard Library",
              content: `\`\`\`python
import math
import random

print(math.sqrt(144))    # 12.0
print(math.pi)           # 3.14159...
print(math.floor(3.7))   # 3
print(random.randint(1, 100))  # Angka acak 1-100

# Import dengan alias
import datetime as dt
print(dt.date.today())
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_6_mc",
                type: "multiple_choice",
                prompt: "Fungsi apakah dari modul math Python yang digunakan untuk menghitung akar kuadrat?",
                conceptGuide: "math.sqrt() menghitung akar kuadrat.",
                options: ["math.sqrt()", "math.root()", "math.power()", "math.square()"],
                correctAnswer: 0,
                explanation: "Tepat! `math.sqrt()` menghitung akar kuadrat.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_6_po",
                type: "predict_output",
                prompt: "Apakah output dari math.ceil(3.2)?",
                conceptGuide: "math.ceil() membulatkan ke atas ke bilangan bulat terdekat.",
                code: `import math\nprint(math.ceil(3.2))`,
                options: ["4", "3", "3.2", "Error"],
                correctAnswer: "4",
                explanation: "Bener! math.ceil(3.2) = 4 (bulatkan ke atas).",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_6_cc",
                type: "code_challenge",
                prompt: "Hitung akar kuadrat dari 225 menggunakan modul math dan cetak hasilnya!",
                conceptGuide: "Tulis `import math` lalu `print(math.sqrt(225))`.",
                starterCode: `import math\nprint(math.sqrt(225))`,
                expectedOutput: "15.0",
                explanation: "Mantap! Modul math Python berhasil digunakan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l3_7",
          language: "python",
          sectionId: "py_sec_3",
          sectionTitle: "03 Fungsi & Modul",
          title: "Exception Handling: try/except",
          description: "Menangani error runtime menggunakan blok try, except, else, dan finally.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l3_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Exception Handling",
              content: `\`\`\`python
def bagi(a, b):
    try:
        hasil = a / b
    except ZeroDivisionError:
        print("Error: Tidak bisa dibagi nol!")
        return None
    except TypeError as e:
        print(f"Tipe data salah: {e}")
        return None
    else:
        print(f"Hasil: {hasil}")
        return hasil
    finally:
        print("Operasi selesai.")

bagi(10, 2)   # Hasil: 5.0 | Operasi selesai.
bagi(10, 0)   # Error: Tidak bisa dibagi nol! | Operasi selesai.
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_3_7_mc",
                type: "multiple_choice",
                prompt: "Blok mana yang selalu dieksekusi di try/except/finally, baik ada error maupun tidak?",
                conceptGuide: "finally selalu dieksekusi terlepas dari apakah ada exception.",
                options: ["finally", "else", "try", "except"],
                correctAnswer: 0,
                explanation: "Tepat! `finally` selalu dieksekusi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_3_7_po",
                type: "predict_output",
                prompt: "Apakah yang dicetak saat mencoba membagi dengan nol?",
                conceptGuide: "ZeroDivisionError ditangkap oleh except.",
                code: `try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Pembagian nol!")`,
                options: ["Pembagian nol!", "Error fatal", "None", "0"],
                correctAnswer: "Pembagian nol!",
                explanation: "Bener! ZeroDivisionError ditangkap oleh blok except.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3_7_cc",
                type: "code_challenge",
                prompt: "Buat blok try/except yang mencoba mengkonversi string 'abc' ke int dan cetak 'Konversi Gagal' saat ValueError!",
                conceptGuide: "Tulis `try:\\n    int('abc')\\nexcept ValueError:\\n    print('Konversi Gagal')`.",
                starterCode: `try:\n    int("abc")\nexcept ValueError:\n    print("Konversi Gagal")`,
                expectedOutput: "Konversi Gagal",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 03 Fungsi & Modul!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_4",
      title: "04 OOP (Object-Oriented Programming) (7 Lesson)",
      description: "Class, objek, inheritance, encapsulation, polymorphism, dan dunder methods.",
      lessons: [
        {
          id: "py_l4_1",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Class & Object Dasar",
          description: "Mendefinisikan class Python dan membuat objek dengan atribut dan method.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l3_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Class Python",
              content: `\`\`\`python
class Hewan:
    def __init__(self, nama: str, jenis: str):
        self.nama = nama
        self.jenis = jenis
    
    def bersuara(self) -> str:
        return f"{self.nama} bersuara"

kucing = Hewan("Mimi", "Kucing")
print(kucing.nama)        # Mimi
print(kucing.bersuara())  # Mimi bersuara
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_1_mc",
                type: "multiple_choice",
                prompt: "Method khusus apakah yang otomatis dipanggil saat membuat instance baru dari class Python?",
                conceptGuide: "__init__ adalah constructor yang dipanggil saat objek dibuat.",
                options: ["__init__", "__new__", "__create__", "__start__"],
                correctAnswer: 0,
                explanation: "Tepat! `__init__` adalah constructor Python.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_1_po",
                type: "predict_output",
                prompt: "Apakah output dari pembuatan objek dan akses atributnya berikut?",
                conceptGuide: "Objek mobil dibuat dengan merk 'Toyota', akses merk.",
                code: `class Mobil:\n    def __init__(self, merk):\n        self.merk = merk\nm = Mobil("Toyota")\nprint(m.merk)`,
                options: ["Toyota", "Mobil", "None", "Error"],
                correctAnswer: "Toyota",
                explanation: "Bener! m.merk = 'Toyota'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_1_cc",
                type: "code_challenge",
                prompt: "Buat class Produk dengan __init__(nama, harga). Buat objek Produk('Laptop', 15000) dan cetak harga produk!",
                conceptGuide: "Tulis `class Produk:\\n    def __init__(self, nama, harga):\\n        self.nama = nama\\n        self.harga = harga\\np = Produk('Laptop', 15000)\\nprint(p.harga)`.",
                starterCode: `class Produk:\n    def __init__(self, nama, harga):\n        self.nama = nama\n        self.harga = harga\np = Produk("Laptop", 15000)\nprint(p.harga)`,
                expectedOutput: "15000",
                explanation: "Sip! Class Python dan object instantiation berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l4_2",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Inheritance & Method Override",
          description: "Mewarisi properti dan method dari class induk dan menimpanya di class turunan.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Inheritance Python",
              content: `\`\`\`python
class Hewan:
    def __init__(self, nama: str):
        self.nama = nama
    def bersuara(self) -> str:
        return "..."

class Kucing(Hewan):  # Mewarisi dari Hewan
    def bersuara(self) -> str:  # Override
        return f"{self.nama} bilang: Meow!"

class Anjing(Hewan):
    def bersuara(self) -> str:
        return f"{self.nama} bilang: Woof!"

k = Kucing("Mimi")
print(k.bersuara())  # Mimi bilang: Meow!
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_2_mc",
                type: "multiple_choice",
                prompt: "Fungsi Python apakah yang digunakan untuk memanggil constructor class induk dari class turunan?",
                conceptGuide: "super() mengakses method dan constructor dari class induk.",
                options: ["super()", "parent()", "base()", "inherit()"],
                correctAnswer: 0,
                explanation: "Tepat! `super()` memanggil constructor/method dari class induk.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_2_tf",
                type: "true_false",
                prompt: "Apakah sebuah class turunan di Python dapat mendefinisikan ulang (override) method yang diwarisi dari class induk?",
                conceptGuide: "Method override adalah fitur utama inheritance OOP.",
                statement: "Class turunan dapat mendefinisikan ulang method yang diwarisi.",
                correctAnswer: true,
                explanation: "Tepat! Override method adalah konsep dasar OOP inheritance.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_2_cc",
                type: "code_challenge",
                prompt: "Buat class Kendaraan dengan method tipe() -> 'Kendaraan'. Buat class Sepeda(Kendaraan) yang override tipe() -> 'Sepeda'. Cetak Sepeda().tipe()!",
                conceptGuide: "Tulis dua class, Sepeda override method tipe() dan cetak hasilnya.",
                starterCode: `class Kendaraan:\n    def tipe(self):\n        return "Kendaraan"\n\nclass Sepeda(Kendaraan):\n    def tipe(self):\n        return "Sepeda"\n\nprint(Sepeda().tipe())`,
                expectedOutput: "Sepeda",
                explanation: "Keren! Inheritance & method override berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l4_3",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Encapsulation & Properties",
          description: "Menyembunyikan detail implementasi dengan atribut privat dan Python @property.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Encapsulation",
              content: `\`\`\`python
class RekeningBank:
    def __init__(self, saldo: float):
        self.__saldo = saldo  # Privat (dua underscore)
    
    @property
    def saldo(self) -> float:
        return self.__saldo
    
    @saldo.setter
    def saldo(self, nilai: float):
        if nilai < 0:
            raise ValueError("Saldo tidak boleh negatif!")
        self.__saldo = nilai

rek = RekeningBank(1000)
print(rek.saldo)   # 1000
rek.saldo = 1500   # Melalui setter
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_3_mc",
                type: "multiple_choice",
                prompt: "Konvensi penamaan apakah yang digunakan di Python untuk menandai atribut sebagai privat?",
                conceptGuide: "Dua underscore __ di awal nama atribut menandai privat dengan name mangling.",
                options: [
                  "Dua underscore __ di awal nama (misal: __saldo)",
                  "Satu underscore _ di awal nama",
                  "Huruf kapital SALDO",
                  "Kata kunci private sebelum nama",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Dua underscore `__nama` menandai atribut privat.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_3_tf",
                type: "true_false",
                prompt: "Apakah decorator @property di Python memungkinkan kita mengakses method seperti mengakses atribut biasa (tanpa tanda kurung)?",
                conceptGuide: "@property membuat method bisa diakses seperti atribut.",
                statement: "@property memungkinkan method diakses seperti atribut biasa.",
                correctAnswer: true,
                explanation: "Tepat! @property membuat metode diakses tanpa tanda kurung.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_3_cc",
                type: "code_challenge",
                prompt: "Buat class Suhu dengan __celsius privat, property celsius getter yang return nilainya. Buat Suhu(100) dan cetak .celsius!",
                conceptGuide: "Tulis class Suhu dengan __celsius dan @property getter.",
                starterCode: `class Suhu:\n    def __init__(self, celsius):\n        self.__celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self.__celsius\n\ns = Suhu(100)\nprint(s.celsius)`,
                expectedOutput: "100",
                explanation: "Super! Encapsulation dengan @property berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l4_4",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Polymorphism & Duck Typing",
          description: "Memahami polymorphism dan duck typing sebagai keunggulan OOP Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Polymorphism",
              content: `\`\`\`python
class Bentuk:
    def luas(self) -> float: return 0.0

class Lingkaran(Bentuk):
    def __init__(self, r): self.r = r
    def luas(self): return 3.14 * self.r ** 2

class Persegi(Bentuk):
    def __init__(self, s): self.s = s
    def luas(self): return self.s ** 2

def hitung_luas(bentuk: Bentuk):
    print(f"Luas: {bentuk.luas()}")

hitung_luas(Lingkaran(5))   # Luas: 78.5
hitung_luas(Persegi(4))     # Luas: 16
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_4_mc",
                type: "multiple_choice",
                prompt: "Apa yang dimaksud dengan duck typing dalam Python?",
                conceptGuide: "Duck typing: jika objek memiliki method yang dibutuhkan, tipe sebenarnya tidak penting.",
                options: [
                  "Jika objek memiliki method yang dibutuhkan, tipe sebenarnya tidak penting",
                  "Objek hanya bisa berinteraksi dengan tipe yang sama",
                  "Tipe data harus dideklarasikan secara eksplisit",
                  "Class harus mewarisi dari base class",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Duck typing: 'Jika berperilaku seperti bebek, maka itu bebek'.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_4_po",
                type: "predict_output",
                prompt: "Apakah output dari polymorphism berikut ketika memanggil luas() pada dua objek berbeda?",
                conceptGuide: "Setiap objek mengimplementasikan luas() secara berbeda.",
                code: `class Kotak:\n    def luas(self): return 9\nclass Segitiga:\n    def luas(self): return 6\nfor b in [Kotak(), Segitiga()]:\n    print(b.luas())`,
                options: ["9\n6", "9 6", "Error", "6\n9"],
                correctAnswer: "9\n6",
                explanation: "Bener! Kotak 9, Segitiga 6 dicetak secara berurutan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_4_cc",
                type: "code_challenge",
                prompt: "Buat class Lingkaran dengan luas() = 3.14 * 5**2 (r=5). Cetak hasilnya!",
                conceptGuide: "Tulis `class Lingkaran:\\n    def luas(self): return 3.14 * 5**2\\nprint(Lingkaran().luas())`.",
                starterCode: `class Lingkaran:\n    def luas(self):\n        return 3.14 * 5 ** 2\nprint(Lingkaran().luas())`,
                expectedOutput: "78.5",
                explanation: "Mantap! Polymorphism berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l4_5",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Dunder Methods (__str__, __repr__, __len__)",
          description: "Mengkustomisasi perilaku objek Python menggunakan special/magic methods.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Dunder Methods",
              content: `\`\`\`python
class Produk:
    def __init__(self, nama: str, harga: float):
        self.nama = nama
        self.harga = harga
    
    def __str__(self) -> str:
        return f"{self.nama} - Rp{self.harga:,.0f}"
    
    def __repr__(self) -> str:
        return f"Produk('{self.nama}', {self.harga})"
    
    def __len__(self) -> int:
        return len(self.nama)

p = Produk("Laptop", 15_000_000)
print(str(p))   # Laptop - Rp15,000,000
print(repr(p))  # Produk('Laptop', 15000000.0)
print(len(p))   # 6
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_5_mc",
                type: "multiple_choice",
                prompt: "Dunder method apakah yang dipanggil ketika menggunakan print() atau str() pada sebuah objek Python?",
                conceptGuide: "__str__ dipanggil saat objek dikonversi ke representasi string human-readable.",
                options: ["__str__", "__repr__", "__print__", "__display__"],
                correctAnswer: 0,
                explanation: "Tepat! `__str__` dipanggil oleh print() dan str().",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_5_tf",
                type: "true_false",
                prompt: "Apakah dunder method __add__ memungkinkan operator + bekerja pada dua objek custom class?",
                conceptGuide: "__add__ mengoverload operator + untuk objek custom.",
                statement: "__add__ mengoverload operator + untuk objek custom.",
                correctAnswer: true,
                explanation: "Tepat! __add__ mengoverload operator + pada objek kustom.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_5_cc",
                type: "code_challenge",
                prompt: "Buat class Item dengan __init__(nama) dan __str__ yang mengembalikan 'Item: ' + nama. Print objek Item('Buku')!",
                conceptGuide: "Tulis class Item dengan __str__ dan `print(Item(\"Buku\"))`.",
                starterCode: `class Item:\n    def __init__(self, nama):\n        self.nama = nama\n    def __str__(self):\n        return "Item: " + self.nama\nprint(Item("Buku"))`,
                expectedOutput: "Item: Buku",
                explanation: "Keren! Dunder methods Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l4_6",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Dataclasses & Type Hints",
          description: "Mendefinisikan class data sederhana dengan @dataclass dan type annotations lengkap.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "@dataclass",
              content: `\`\`\`python
from dataclasses import dataclass, field
from typing import List

@dataclass
class Mahasiswa:
    nama: str
    nim: str
    ipk: float = 0.0
    mata_kuliah: List[str] = field(default_factory=list)

m = Mahasiswa("Budi", "12345", 3.75)
print(m.nama)    # Budi
print(m)         # Mahasiswa(nama='Budi', nim='12345', ipk=3.75, ...)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_6_mc",
                type: "multiple_choice",
                prompt: "Decorator apakah dari module dataclasses yang secara otomatis membuat __init__, __repr__, dan __eq__ untuk sebuah class?",
                conceptGuide: "@dataclass otomatis menghasilkan method-method boilerplate.",
                options: ["@dataclass", "@model", "@struct", "@record"],
                correctAnswer: 0,
                explanation: "Tepat! `@dataclass` otomatis membuat __init__, __repr__, __eq__.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_6_tf",
                type: "true_false",
                prompt: "Apakah @dataclass dapat membuat class menjadi immutable (frozen) sehingga atributnya tidak bisa diubah?",
                conceptGuide: "@dataclass(frozen=True) membuat objek immutable.",
                statement: "@dataclass(frozen=True) membuat objek immutable.",
                correctAnswer: true,
                explanation: "Tepat! `@dataclass(frozen=True)` membuat class immutable.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_6_cc",
                type: "code_challenge",
                prompt: "Buat dataclass Titik dengan atribut x: float dan y: float. Buat Titik(3.0, 4.0) dan cetak x!",
                conceptGuide: "Tulis `from dataclasses import dataclass; @dataclass\\nclass Titik:\\n    x: float\\n    y: float\\nt = Titik(3.0, 4.0)\\nprint(t.x)`.",
                starterCode: `from dataclasses import dataclass\n\n@dataclass\nclass Titik:\n    x: float\n    y: float\n\nt = Titik(3.0, 4.0)\nprint(t.x)`,
                expectedOutput: "3.0",
                explanation: "Super! Dataclass Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l4_7",
          language: "python",
          sectionId: "py_sec_4",
          sectionTitle: "04 OOP (Object-Oriented Programming)",
          title: "Abstract Classes & Interface Pattern",
          description: "Mendefinisikan kontrak class menggunakan Abstract Base Class (ABC) di Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Abstract Base Class",
              content: `\`\`\`python
from abc import ABC, abstractmethod

class Repository(ABC):
    @abstractmethod
    def buat(self, data: dict) -> bool: ...
    
    @abstractmethod
    def cari(self, id: int) -> dict | None: ...

class UserRepository(Repository):
    def buat(self, data): return True
    def cari(self, id): return {"id": id}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4_7_mc",
                type: "multiple_choice",
                prompt: "Apakah yang terjadi jika kita mencoba menginstansiasi class ABC (Abstract Base Class) secara langsung?",
                conceptGuide: "ABC tidak bisa diinstansiasi langsung, hanya bisa melalui class turunan.",
                options: [
                  "TypeError: Tidak bisa membuat instance ABC langsung",
                  "Membuat instance kosong",
                  "Menghasilkan None",
                  "Berfungsi normal",
                ],
                correctAnswer: 0,
                explanation: "Tepat! ABC tidak bisa diinstansiasi, akan menghasilkan TypeError.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_4_7_tf",
                type: "true_false",
                prompt: "Apakah class turunan dari ABC wajib mengimplementasikan semua @abstractmethod yang didefinisikan oleh ABC induknya?",
                conceptGuide: "Semua @abstractmethod harus diimplementasikan oleh class turunan.",
                statement: "Class turunan ABC wajib mengimplementasikan semua @abstractmethod.",
                correctAnswer: true,
                explanation: "Tepat! Semua abstract method wajib diimplementasikan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_4_7_cc",
                type: "code_challenge",
                prompt: "Buat class konkret UserRepo yang mengimplementasikan method nama() dan mengembalikan 'UserRepo'. Cetak UserRepo().nama()!",
                conceptGuide: "Tulis `class UserRepo:\\n    def nama(self): return \"UserRepo\"\\nprint(UserRepo().nama())`.",
                starterCode: `class UserRepo:\n    def nama(self):\n        return "UserRepo"\nprint(UserRepo().nama())`,
                expectedOutput: "UserRepo",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 04 OOP!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_5",
      title: "05 File I/O & JSON (7 Lesson)",
      description: "Baca tulis file teks, CSV, JSON, pengelolaan path, dan serialisasi data.",
      lessons: [
        {
          id: "py_l5_1",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "Baca & Tulis File Teks",
          description: "Membaca dan menulis file teks menggunakan context manager with open().",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l4_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "File I/O Python",
              content: `\`\`\`python
# Tulis file
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Halo Python!\n")
    f.writelines(["Baris 2\n", "Baris 3\n"])

# Baca file
with open("data.txt", "r", encoding="utf-8") as f:
    isi = f.read()
    print(isi)

# Baca baris per baris
with open("data.txt") as f:
    for baris in f:
        print(baris.strip())
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_1_mc",
                type: "multiple_choice",
                prompt: "Mengapa disarankan menggunakan context manager 'with open()' untuk membuka file?",
                conceptGuide: "with open() otomatis menutup file bahkan jika terjadi exception.",
                options: [
                  "Otomatis menutup file meski ada exception",
                  "Membuat file lebih cepat dibaca",
                  "Mengizinkan akses bersamaan",
                  "Membuat file read-only",
                ],
                correctAnswer: 0,
                explanation: "Tepat! `with` menjamin file selalu ditutup.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_1_tf",
                type: "true_false",
                prompt: "Apakah mode 'w' pada open() akan menghapus isi file yang sudah ada sebelum menulis?",
                conceptGuide: "Mode 'w' membuat file baru atau menimpa file yang sudah ada.",
                statement: "Mode 'w' menghapus isi file yang ada dan membuat ulang.",
                correctAnswer: true,
                explanation: "Tepat! Mode `w` menimpa file yang sudah ada.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan file read: buat list baris = ['Halo', 'Python']. Cetak baris pertama!",
                conceptGuide: "Tulis `baris = [\"Halo\", \"Python\"]; print(baris[0])`.",
                starterCode: `baris = ["Halo", "Python"]\nprint(baris[0])`,
                expectedOutput: "Halo",
                explanation: "Sip! Konsep File I/O Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l5_2",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "JSON: Serialize & Deserialize",
          description: "Mengkonversi data Python ke format JSON dan sebaliknya menggunakan modul json.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l5_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "JSON di Python",
              content: `\`\`\`python
import json

# Python dict -> JSON string (serialize)
data = {"nama": "Kadez", "skor": 100, "aktif": True}
json_str = json.dumps(data, indent=2)
print(json_str)

# JSON string -> Python dict (deserialize)
obj = json.loads(json_str)
print(obj["nama"])  # Kadez

# Tulis ke file JSON
with open("data.json", "w") as f:
    json.dump(data, f)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_2_mc",
                type: "multiple_choice",
                prompt: "Fungsi Python JSON apakah yang mengkonversi dictionary Python menjadi string JSON?",
                conceptGuide: "json.dumps() mengkonversi dict ke JSON string.",
                options: ["json.dumps()", "json.loads()", "json.dump()", "json.load()"],
                correctAnswer: 0,
                explanation: "Tepat! `json.dumps()` mengkonversi dict ke JSON string.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_2_po",
                type: "predict_output",
                prompt: "Apakah output dari json.loads() pada string JSON berikut?",
                conceptGuide: "json.loads() mengkonversi string JSON ke dict Python.",
                code: `import json\ndata = json.loads('{"nama": "Budi", "umur": 25}')\nprint(data["nama"])`,
                options: ["Budi", '{"nama": "Budi"}', "Error", "None"],
                correctAnswer: "Budi",
                explanation: "Bener! data['nama'] = 'Budi' setelah deserialisasi.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_2_cc",
                type: "code_challenge",
                prompt: "Serialize dictionary { 'kota': 'Bandung', 'penduduk': 2500000 } ke JSON dan cetak nilainya (indent=None)!",
                conceptGuide: "Tulis `import json; data = {'kota': 'Bandung', 'penduduk': 2500000}; print(json.dumps(data))`.",
                starterCode: `import json\ndata = {"kota": "Bandung", "penduduk": 2500000}\nprint(json.dumps(data))`,
                expectedOutput: '{"kota": "Bandung", "penduduk": 2500000}',
                explanation: "Keren! JSON serialization berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l5_3",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "CSV: Baca & Tulis Data Tabular",
          description: "Membaca dan menulis data tabular dalam format CSV menggunakan modul csv.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l5_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "CSV Python",
              content: `\`\`\`python
import csv

# Tulis CSV
with open("produk.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["nama", "harga"])
    writer.writeheader()
    writer.writerow({"nama": "Laptop", "harga": 15000})

# Baca CSV
with open("produk.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["nama"], row["harga"])
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_3_mc",
                type: "multiple_choice",
                prompt: "Apakah tujuan parameter newline='' pada saat membuka file CSV untuk ditulis?",
                conceptGuide: "newline='' mencegah baris kosong ganda saat menulis CSV di Windows.",
                options: [
                  "Mencegah baris kosong ganda di Windows",
                  "Membuat file lebih kecil",
                  "Mengizinkan karakter khusus",
                  "Tidak ada pengaruh",
                ],
                correctAnswer: 0,
                explanation: "Tepat! newline='' mencegah double newline di Windows.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_3_tf",
                type: "true_false",
                prompt: "Apakah csv.DictReader di Python secara otomatis menggunakan baris pertama file CSV sebagai nama kolom (header)?",
                conceptGuide: "DictReader menggunakan baris pertama sebagai fieldnames secara otomatis.",
                statement: "csv.DictReader otomatis menggunakan baris pertama sebagai header.",
                correctAnswer: true,
                explanation: "Tepat! DictReader otomatis membaca baris pertama sebagai header.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan CSV read: buat list rows = [{'nama': 'Laptop', 'harga': '15000'}]. Cetak rows[0]['nama']!",
                conceptGuide: "Tulis `rows = [{'nama': 'Laptop', 'harga': '15000'}]; print(rows[0]['nama'])`.",
                starterCode: `rows = [{"nama": "Laptop", "harga": "15000"}]\nprint(rows[0]["nama"])`,
                expectedOutput: "Laptop",
                explanation: "Super! Konsep CSV Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l5_4",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "Pathlib: Pengelolaan Path Modern",
          description: "Memanipulasi path file dan direktori dengan cara yang modern menggunakan pathlib.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l5_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pathlib Python",
              content: `\`\`\`python
from pathlib import Path

# Path manipulation
base = Path("./data")
file = base / "laporan.json"

print(file)                # data/laporan.json
print(file.name)           # laporan.json
print(file.suffix)         # .json
print(file.parent)         # data
print(file.stem)           # laporan
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_4_mc",
                type: "multiple_choice",
                prompt: "Apa keunggulan pathlib dibanding os.path untuk manipulasi file path di Python?",
                conceptGuide: "pathlib menggunakan pendekatan OOP yang lebih intuitif dari string path.",
                options: [
                  "Pendekatan OOP yang lebih intuitif dengan operator /",
                  "Lebih cepat dari os.path",
                  "Bisa membuat file lebih besar",
                  "Hanya bekerja di Linux",
                ],
                correctAnswer: 0,
                explanation: "Tepat! pathlib lebih intuitif dengan API OOP dan operator /.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_4_po",
                type: "predict_output",
                prompt: "Apakah nilai dari Path('data/laporan.json').suffix?",
                conceptGuide: ".suffix mengembalikan ekstensi file termasuk titiknya.",
                code: `from pathlib import Path\nprint(Path("data/laporan.json").suffix)`,
                options: [".json", "json", "laporan", "laporan.json"],
                correctAnswer: ".json",
                explanation: "Bener! .suffix mengembalikan '.json'.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan path: buat string path = 'data/output.csv'. Cetak ekstensinya (split('.') terakhir)!",
                conceptGuide: "Tulis `path = \"data/output.csv\"; print(\".\" + path.split(\".\")[-1])`.",
                starterCode: `path = "data/output.csv"\nprint("." + path.split(".")[-1])`,
                expectedOutput: ".csv",
                explanation: "Mantap! Pathlib Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l5_5",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "Environment Variables & .env",
          description: "Membaca konfigurasi sensitif dari environment variables menggunakan os.environ.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l5_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Environment Variables",
              content: `\`\`\`python
import os

# Baca env variable
db_host = os.environ.get("DB_HOST", "localhost")
db_port = int(os.environ.get("DB_PORT", "5432"))

print(f"Koneksi ke {db_host}:{db_port}")

# Dengan python-dotenv (library)
from dotenv import load_dotenv
load_dotenv()  # Load dari .env file
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_5_mc",
                type: "multiple_choice",
                prompt: "Mengapa konfigurasi sensitif seperti password database harus disimpan di environment variables, bukan di kode sumber?",
                conceptGuide: "Env vars tidak masuk ke version control (git), menjaga keamanan.",
                options: [
                  "Agar tidak masuk ke version control dan tetap aman",
                  "Karena lebih cepat dari hardcode",
                  "Karena Python tidak bisa baca string",
                  "Agar kode lebih pendek",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Env vars menjaga keamanan data sensitif dari version control.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_5_tf",
                type: "true_false",
                prompt: "Apakah os.environ.get('KEY', 'default') mengembalikan nilai default jika KEY tidak ditemukan?",
                conceptGuide: "Parameter kedua .get() adalah nilai default jika key tidak ada.",
                statement: "os.environ.get('KEY', 'default') mengembalikan 'default' jika KEY tidak ada.",
                correctAnswer: true,
                explanation: "Tepat! .get() mengembalikan nilai default jika key tidak ditemukan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan env variable: buat dict config = {'DB_HOST': 'localhost'}. Cetak config.get('DB_HOST', 'unknown')!",
                conceptGuide: "Tulis `config = {'DB_HOST': 'localhost'}; print(config.get('DB_HOST', 'unknown'))`.",
                starterCode: `config = {"DB_HOST": "localhost"}\nprint(config.get("DB_HOST", "unknown"))`,
                expectedOutput: "localhost",
                explanation: "Keren! Environment variables Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l5_6",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "Logging Module",
          description: "Mencatat aktivitas aplikasi menggunakan modul logging Python yang proper.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l5_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Python Logging",
              content: `\`\`\`python
import logging

# Konfigurasi logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)

logger.debug("Debug message")
logger.info("Aplikasi dimulai")
logger.warning("Peringatan: disk hampir penuh")
logger.error("Error: koneksi gagal")
logger.critical("KRITIS: server down!")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_6_mc",
                type: "multiple_choice",
                prompt: "Tingkatan log mana yang paling sesuai untuk mencatat pesan operasi normal aplikasi?",
                conceptGuide: "INFO digunakan untuk pesan operasional yang informatif.",
                options: ["INFO", "DEBUG", "WARNING", "ERROR"],
                correctAnswer: 0,
                explanation: "Tepat! `INFO` untuk pesan operasional normal.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_6_tf",
                type: "true_false",
                prompt: "Apakah menggunakan print() untuk debugging di production code adalah praktik yang baik?",
                conceptGuide: "print() tidak bisa difilter, logging lebih sesuai untuk production.",
                statement: "print() adalah cara terbaik untuk logging di production code.",
                correctAnswer: false,
                explanation: "Tepat! Gunakan logging module, bukan print(), di production.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan logging level: buat dict log_levels = {'DEBUG': 10, 'INFO': 20, 'ERROR': 40}. Cetak level ERROR!",
                conceptGuide: "Tulis `log_levels = {'DEBUG': 10, 'INFO': 20, 'ERROR': 40}; print(log_levels['ERROR'])`.",
                starterCode: `log_levels = {"DEBUG": 10, "INFO": 20, "ERROR": 40}\nprint(log_levels["ERROR"])`,
                expectedOutput: "40",
                explanation: "Super! Logging module Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l5_7",
          language: "python",
          sectionId: "py_sec_5",
          sectionTitle: "05 File I/O & JSON",
          title: "Regular Expressions (regex)",
          description: "Mencocokkan dan mengekstrak pola teks menggunakan modul re Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l5_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Regular Expressions",
              content: `\`\`\`python
import re

teks = "Email: kadez@example.com dan budi@mail.id"

# Cari semua email
pola = r"[\\w.-]+@[\\w.-]+\\.[a-z]{2,}"
emails = re.findall(pola, teks)
print(emails)  # ['kadez@example.com', 'budi@mail.id']

# Cek apakah string cocok
valid = re.match(r"^\\d{4}-\\d{2}-\\d{2}$", "2024-01-15")
print(bool(valid))  # True
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_5_7_mc",
                type: "multiple_choice",
                prompt: "Fungsi re apakah yang mengembalikan SEMUA kecocokan pola dalam sebuah string?",
                conceptGuide: "re.findall() mengembalikan list semua kecocokan.",
                options: ["re.findall()", "re.search()", "re.match()", "re.find()"],
                correctAnswer: 0,
                explanation: "Tepat! `re.findall()` mengembalikan list semua kecocokan.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_5_7_po",
                type: "predict_output",
                prompt: "Berapa banyak angka yang ditemukan oleh re.findall dalam string '2024-01-15'?",
                conceptGuide: "\\d+ mencocokkan sekuens angka, ada 3 sekuens di '2024-01-15'.",
                code: `import re\nhasil = re.findall(r"\\d+", "2024-01-15")\nprint(len(hasil))`,
                options: ["3", "8", "1", "Error"],
                correctAnswer: "3",
                explanation: "Bener! '2024', '01', '15' = 3 kecocokan angka.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_5_7_cc",
                type: "code_challenge",
                prompt: "Cari semua angka dalam string 'Skor: 95 dari 100 pada tes ke-3'. Cetak jumlah angka yang ditemukan!",
                conceptGuide: "Tulis `import re; hasil = re.findall(r'\\d+', 'Skor: 95 dari 100 pada tes ke-3'); print(len(hasil))`.",
                starterCode: `import re\nhasil = re.findall(r"\\d+", "Skor: 95 dari 100 pada tes ke-3")\nprint(len(hasil))`,
                expectedOutput: "3",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 05 File I/O & JSON!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_6",
      title: "06 Async, Concurrency & Web Scraping (7 Lesson)",
      description: "asyncio, async/await, threading, requests, BeautifulSoup, dan httpx.",
      lessons: [
        {
          id: "py_l6_1",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "asyncio & async/await Dasar",
          description: "Menulis kode asynchronous Python menggunakan asyncio dan sintaks async/await.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l5_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "async/await Python",
              content: `\`\`\`python
import asyncio

async def ambil_data(url: str) -> str:
    await asyncio.sleep(1)  # Simulasi I/O delay
    return f"Data dari {url}"

async def main():
    hasil = await ambil_data("https://api.example.com")
    print(hasil)

asyncio.run(main())
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_1_mc",
                type: "multiple_choice",
                prompt: "Fungsi asyncio apakah yang digunakan untuk menjalankan coroutine utama di Python?",
                conceptGuide: "asyncio.run() adalah entry point untuk menjalankan coroutine.",
                options: ["asyncio.run()", "asyncio.start()", "asyncio.execute()", "asyncio.loop()"],
                correctAnswer: 0,
                explanation: "Tepat! `asyncio.run()` menjalankan coroutine utama.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_1_tf",
                type: "true_false",
                prompt: "Apakah async/await di Python menjalankan kode secara parallel di beberapa CPU core (multi-threading)?",
                conceptGuide: "asyncio adalah concurrency single-thread, bukan multi-core parallel.",
                statement: "async/await Python menjalankan kode secara parallel di beberapa CPU core.",
                correctAnswer: false,
                explanation: "Tepat! asyncio adalah single-thread concurrency, bukan multi-core parallel.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan async: buat async function hitung() yang mengembalikan 42. Jalankan dengan asyncio.run(). Cetak hasilnya!",
                conceptGuide: "Tulis `import asyncio; async def hitung(): return 42; print(asyncio.run(hitung()))`.",
                starterCode: `import asyncio\n\nasync def hitung():\n    return 42\n\nprint(asyncio.run(hitung()))`,
                expectedOutput: "42",
                explanation: "Sip! async/await Python berhasil disimulasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l6_2",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "asyncio.gather & Concurrent Tasks",
          description: "Menjalankan banyak coroutine secara bersamaan menggunakan asyncio.gather.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l6_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "asyncio.gather()",
              content: `\`\`\`python
import asyncio

async def tugas(nama, delay):
    await asyncio.sleep(delay)
    return f"Selesai: {nama}"

async def main():
    # Jalankan 3 tugas bersamaan
    hasil = await asyncio.gather(
        tugas("A", 1),
        tugas("B", 2),
        tugas("C", 0.5),
    )
    for h in hasil:
        print(h)

asyncio.run(main())
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_2_mc",
                type: "multiple_choice",
                prompt: "Apakah tipe data yang dikembalikan oleh asyncio.gather() setelah semua coroutine selesai?",
                conceptGuide: "asyncio.gather() mengembalikan list hasil dari semua coroutine.",
                options: [
                  "List berisi hasil dari setiap coroutine",
                  "Tuple hasil coroutine pertama saja",
                  "Dictionary dari semua hasil",
                  "None",
                ],
                correctAnswer: 0,
                explanation: "Tepat! gather() mengembalikan list semua hasil coroutine.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_2_po",
                type: "predict_output",
                prompt: "Berapa hasil dari asyncio.gather() dengan 3 coroutine yang masing-masing mengembalikan angka?",
                conceptGuide: "gather() mengembalikan semua hasil dalam satu list.",
                code: `import asyncio\nasync def f(x): return x * 2\nasync def main():\n    r = await asyncio.gather(f(1), f(2), f(3))\n    print(len(r))\nasyncio.run(main())`,
                options: ["3", "1", "6", "Error"],
                correctAnswer: "3",
                explanation: "Bener! gather() mengembalikan list dengan 3 hasil.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_2_cc",
                type: "code_challenge",
                prompt: "Simulasikan gather: buat list tasks = [1, 2, 3] dan cetak sum(tasks) sebagai simulasi hasil gather!",
                conceptGuide: "Tulis `tasks = [1, 2, 3]; print(sum(tasks))`.",
                starterCode: `tasks = [1, 2, 3]\nprint(sum(tasks))`,
                expectedOutput: "6",
                explanation: "Keren! asyncio.gather() dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l6_3",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "HTTP Requests dengan requests Library",
          description: "Melakukan HTTP request ke API eksternal menggunakan library requests Python.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l6_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "requests Library",
              content: `\`\`\`python
import requests

# GET request
resp = requests.get("https://jsonplaceholder.typicode.com/todos/1")
data = resp.json()
print(data["title"])
print(resp.status_code)  # 200

# POST request
payload = {"nama": "Kadez", "email": "k@mail.com"}
resp = requests.post("https://api.example.com/users", json=payload)
print(resp.json())
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_3_mc",
                type: "multiple_choice",
                prompt: "Method requests apakah yang digunakan untuk melakukan HTTP GET request?",
                conceptGuide: "requests.get() melakukan GET request ke URL.",
                options: ["requests.get(url)", "requests.fetch(url)", "requests.read(url)", "requests.query(url)"],
                correctAnswer: 0,
                explanation: "Tepat! `requests.get()` melakukan GET request.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_3_tf",
                type: "true_false",
                prompt: "Apakah method .json() pada response requests otomatis mengurai JSON dari response body menjadi dict Python?",
                conceptGuide: ".json() mengurai JSON response menjadi dict Python.",
                statement: "requests response.json() otomatis mengurai JSON menjadi dict Python.",
                correctAnswer: true,
                explanation: "Tepat! `.json()` mengurai JSON response menjadi dict.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan HTTP response: buat dict response = { 'status': 200, 'data': 'OK' }. Cetak response['status']!",
                conceptGuide: "Tulis `response = { 'status': 200, 'data': 'OK' }; print(response['status'])`.",
                starterCode: `response = {"status": 200, "data": "OK"}\nprint(response["status"])`,
                expectedOutput: "200",
                explanation: "Super! Library requests Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l6_4",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "Web Scraping dengan BeautifulSoup",
          description: "Mengekstrak data dari halaman web HTML menggunakan library BeautifulSoup.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l6_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "BeautifulSoup",
              content: `\`\`\`python
from bs4 import BeautifulSoup
import requests

html = requests.get("https://example.com").text
soup = BeautifulSoup(html, "html.parser")

judul = soup.find("h1").text
semua_link = soup.find_all("a")

for link in semua_link:
    print(link.get("href"), link.text)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_4_mc",
                type: "multiple_choice",
                prompt: "Method BeautifulSoup apakah yang mengembalikan SEMUA elemen HTML yang cocok dengan tag/selector?",
                conceptGuide: "find_all() mengembalikan list semua kecocokan.",
                options: ["find_all()", "find()", "select_one()", "get_all()"],
                correctAnswer: 0,
                explanation: "Tepat! `find_all()` mengembalikan semua elemen yang cocok.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_4_tf",
                type: "true_false",
                prompt: "Apakah BeautifulSoup bisa mengeksekusi JavaScript yang ada di halaman web saat scraping?",
                conceptGuide: "BeautifulSoup hanya mengurai HTML statis, tidak bisa eksekusi JS.",
                statement: "BeautifulSoup dapat mengeksekusi JavaScript di halaman web.",
                correctAnswer: false,
                explanation: "Tepat! BeautifulSoup hanya parsing HTML statis, tidak bisa eksekusi JS.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan HTML parsing: buat list links = ['http://a.com', 'http://b.com']. Cetak link pertama!",
                conceptGuide: "Tulis `links = ['http://a.com', 'http://b.com']; print(links[0])`.",
                starterCode: `links = ["http://a.com", "http://b.com"]\nprint(links[0])`,
                expectedOutput: "http://a.com",
                explanation: "Mantap! Konsep web scraping Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l6_5",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "Threading & Multiprocessing",
          description: "Menjalankan tugas secara paralel menggunakan thread dan process di Python.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l6_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Threading vs Multiprocessing",
              content: `\`\`\`python
import threading
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor

# Threading (cocok untuk I/O-bound)
def unduh(url):
    print(f"Mengunduh {url}")

threads = [threading.Thread(target=unduh, args=(f"url_{i}",)) for i in range(3)]
for t in threads: t.start()
for t in threads: t.join()

# ThreadPoolExecutor (lebih modern)
with ThreadPoolExecutor(max_workers=4) as pool:
    pool.map(unduh, [f"url_{i}" for i in range(4)])
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_5_mc",
                type: "multiple_choice",
                prompt: "Kapan lebih disarankan menggunakan multiprocessing daripada threading di Python?",
                conceptGuide: "Multiprocessing cocok untuk CPU-bound tasks karena menghindari GIL.",
                options: [
                  "Untuk CPU-bound tasks (kalkulasi berat) karena menghindari GIL",
                  "Untuk I/O-bound tasks seperti download",
                  "Selalu lebih baik dari threading",
                  "Untuk tasks yang sangat singkat",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Multiprocessing untuk CPU-bound, threading untuk I/O-bound.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_5_tf",
                type: "true_false",
                prompt: "Apakah Python GIL (Global Interpreter Lock) membatasi eksekusi thread Python secara true-parallel untuk kode Python murni?",
                conceptGuide: "GIL membatasi hanya satu thread Python yang bisa berjalan di satu waktu.",
                statement: "Python GIL membatasi eksekusi thread Python secara true-parallel.",
                correctAnswer: true,
                explanation: "Tepat! GIL adalah alasan threading Python tidak bisa true-parallel.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan ThreadPool: buat list tasks = ['unduh A', 'unduh B', 'unduh C']. Cetak jumlah tasks!",
                conceptGuide: "Tulis `tasks = ['unduh A', 'unduh B', 'unduh C']; print(len(tasks))`.",
                starterCode: `tasks = ["unduh A", "unduh B", "unduh C"]\nprint(len(tasks))`,
                expectedOutput: "3",
                explanation: "Keren! Threading & multiprocessing Python dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l6_6",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "Generator & Iterator",
          description: "Membuat generator untuk memproses data besar secara lazy tanpa memuat semua ke memori.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l6_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Generator Python",
              content: `\`\`\`python
# Generator function dengan yield
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Lazy - tidak menghitung semua sekaligus
gen = fibonacci(10)
for angka in gen:
    print(angka, end=" ")
# 0 1 1 2 3 5 8 13 21 34

# Generator expression
kuadrat = (x**2 for x in range(10))
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_6_mc",
                type: "multiple_choice",
                prompt: "Kata kunci apakah yang membuat sebuah fungsi Python menjadi generator?",
                conceptGuide: "yield membuat fungsi menjadi generator yang menghasilkan nilai satu per satu.",
                options: ["yield", "return", "generate", "async"],
                correctAnswer: 0,
                explanation: "Tepat! `yield` mengubah fungsi biasa menjadi generator.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_6_tf",
                type: "true_false",
                prompt: "Apakah generator Python lebih hemat memori daripada list comprehension karena tidak menyimpan semua nilai sekaligus?",
                conceptGuide: "Generator menghasilkan nilai satu per satu (lazy), hemat memori.",
                statement: "Generator lebih hemat memori karena nilai dihasilkan satu per satu.",
                correctAnswer: true,
                explanation: "Tepat! Generator adalah lazy evaluation yang hemat memori.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_6_cc",
                type: "code_challenge",
                prompt: "Buat generator angka_genap(n) yang yield bilangan genap dari 0 sampai n. Cetak list(angka_genap(10))!",
                conceptGuide: "Tulis `def angka_genap(n):\\n    for i in range(0, n+1, 2): yield i\\nprint(list(angka_genap(10)))`.",
                starterCode: `def angka_genap(n):\n    for i in range(0, n + 1, 2):\n        yield i\nprint(list(angka_genap(10)))`,
                expectedOutput: "[0, 2, 4, 6, 8, 10]",
                explanation: "Super! Generator Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l6_7",
          language: "python",
          sectionId: "py_sec_6",
          sectionTitle: "06 Async, Concurrency & Web Scraping",
          title: "Context Managers & __enter__/__exit__",
          description: "Membuat context manager kustom menggunakan class atau contextlib untuk resource management.",
          icon: "code",
          xp: 40,
          prerequisites: ["py_l6_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Custom Context Manager",
              content: `\`\`\`python
from contextlib import contextmanager

@contextmanager
def kelola_koneksi(host: str):
    print(f"Membuka koneksi ke {host}")
    try:
        yield {"host": host, "status": "terhubung"}
    finally:
        print("Menutup koneksi")

with kelola_koneksi("localhost") as conn:
    print(f"Koneksi aktif: {conn['host']}")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_6_7_mc",
                type: "multiple_choice",
                prompt: "Decorator dari contextlib apakah yang digunakan untuk membuat context manager dari generator function?",
                conceptGuide: "@contextmanager dari contextlib membuat context manager dari generator.",
                options: ["@contextmanager", "@contextlib", "@with_context", "@resource"],
                correctAnswer: 0,
                explanation: "Tepat! `@contextmanager` membuat context manager dari generator.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_6_7_tf",
                type: "true_false",
                prompt: "Apakah blok finally di dalam @contextmanager selalu dieksekusi saat keluar dari blok with, meski ada exception?",
                conceptGuide: "finally di @contextmanager selalu berjalan untuk cleanup.",
                statement: "finally di @contextmanager selalu berjalan meski ada exception.",
                correctAnswer: true,
                explanation: "Tepat! finally memastikan cleanup selalu dijalankan.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_6_7_cc",
                type: "code_challenge",
                prompt: "Simulasikan context manager: cetak 'Buka', lakukan 'Proses', lalu cetak 'Tutup'. Output akhir: 'Selesai'!",
                conceptGuide: "Tulis `print(\"Buka\"); print(\"Proses\"); print(\"Tutup\"); print(\"Selesai\")`.",
                starterCode: `print("Buka")\nprint("Proses")\nprint("Tutup")\nprint("Selesai")`,
                expectedOutput: "Buka\nProses\nTutup\nSelesai",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 06 Async!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_7",
      title: "07 Data Processing & Pandas (7 Lesson)",
      description: "NumPy, Pandas DataFrame, data cleaning, aggregasi, visualisasi dasar, dan statistik.",
      lessons: [
        {
          id: "py_l7_1",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "Statistik Dasar tanpa Library",
          description: "Menghitung mean, median, modus, dan standar deviasi dari data mentah di Python.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l6_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Statistik Manual Python",
              content: `\`\`\`python
data = [85, 90, 78, 92, 88, 76, 95, 82]

# Mean
mean = sum(data) / len(data)
print(f"Mean: {mean:.2f}")

# Median
terurut = sorted(data)
n = len(terurut)
if n % 2 == 0:
    median = (terurut[n//2-1] + terurut[n//2]) / 2
else:
    median = terurut[n//2]
print(f"Median: {median}")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_1_mc",
                type: "multiple_choice",
                prompt: "Bagaimana cara menghitung mean (rata-rata) dari list angka di Python tanpa library?",
                conceptGuide: "Mean = sum(data) / len(data).",
                options: [
                  "sum(data) / len(data)",
                  "max(data) / min(data)",
                  "data.average()",
                  "mean(data)",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Mean = `sum(data) / len(data)`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_1_po",
                type: "predict_output",
                prompt: "Apakah rata-rata dari list [10, 20, 30, 40]?",
                conceptGuide: "(10+20+30+40)/4 = 100/4 = 25.",
                code: `data = [10, 20, 30, 40]\nprint(sum(data) / len(data))`,
                options: ["25.0", "10.0", "100", "Error"],
                correctAnswer: "25.0",
                explanation: "Bener! (10+20+30+40)/4 = 25.0.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_1_cc",
                type: "code_challenge",
                prompt: "Hitung rata-rata dari list nilai = [75, 80, 90, 85, 70] dan cetak hasilnya!",
                conceptGuide: "Tulis `nilai = [75, 80, 90, 85, 70]; print(sum(nilai) / len(nilai))`.",
                starterCode: `nilai = [75, 80, 90, 85, 70]\nprint(sum(nilai) / len(nilai))`,
                expectedOutput: "80.0",
                explanation: "Sip! Statistik dasar Python berhasil dihitung.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l7_2",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "Sorting & Grouping Data",
          description: "Mengurutkan dan mengelompokkan data menggunakan sorted() dan itertools.groupby.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l7_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Sort & Group",
              content: `\`\`\`python
from itertools import groupby
from operator import itemgetter

mahasiswa = [
    {"nama": "Budi", "jurusan": "IT"},
    {"nama": "Ani", "jurusan": "Hukum"},
    {"nama": "Cici", "jurusan": "IT"},
]

# Sort by jurusan
terurut = sorted(mahasiswa, key=itemgetter("jurusan"))

# Group by jurusan
for jurusan, kelompok in groupby(terurut, key=itemgetter("jurusan")):
    print(f"{jurusan}: {[m['nama'] for m in kelompok]}")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_2_mc",
                type: "multiple_choice",
                prompt: "Parameter apakah yang digunakan pada sorted() untuk menentukan field yang digunakan sebagai kunci pengurutan?",
                conceptGuide: "Parameter `key` menentukan fungsi untuk mengambil nilai pengurutan.",
                options: ["key=", "sort=", "by=", "field="],
                correctAnswer: 0,
                explanation: "Tepat! Parameter `key` menentukan kunci pengurutan.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_2_po",
                type: "predict_output",
                prompt: "Apakah output dari sorting list dict berdasarkan nilai 'skor' descending?",
                conceptGuide: "reverse=True untuk descending sort.",
                code: `data = [{"n": "A", "s": 80}, {"n": "B", "s": 95}, {"n": "C", "s": 70}]\nterurut = sorted(data, key=lambda x: x["s"], reverse=True)\nprint(terurut[0]["n"])`,
                options: ["B", "A", "C", "Error"],
                correctAnswer: "B",
                explanation: "Bener! B dengan skor 95 adalah yang tertinggi.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_2_cc",
                type: "code_challenge",
                prompt: "Sort list produk = [{'n':'C','h':300},{'n':'A','h':100},{'n':'B','h':200}] berdasarkan harga ascending. Cetak nama produk pertama!",
                conceptGuide: "Tulis `produk = [{'n':'C','h':300},{'n':'A','h':100},{'n':'B','h':200}]; s = sorted(produk, key=lambda x: x['h']); print(s[0]['n'])`.",
                starterCode: `produk = [{"n": "C", "h": 300}, {"n": "A", "h": 100}, {"n": "B", "h": 200}]\nterurut = sorted(produk, key=lambda x: x["h"])\nprint(terurut[0]["n"])`,
                expectedOutput: "A",
                explanation: "Keren! Sorting data Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l7_3",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "Pandas Series & DataFrame Dasar",
          description: "Membuat dan memanipulasi struktur data tabular menggunakan Pandas.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l7_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Pandas Dasar",
              content: `\`\`\`python
import pandas as pd

# Membuat DataFrame
data = {
    "nama": ["Budi", "Ani", "Cici"],
    "skor": [85, 92, 78],
    "kota": ["Jakarta", "Bandung", "Surabaya"]
}
df = pd.DataFrame(data)

print(df.head())
print(df.describe())
print(df["skor"].mean())  # 85.0
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_3_mc",
                type: "multiple_choice",
                prompt: "Method Pandas apakah yang digunakan untuk menampilkan statistik ringkas (count, mean, std, min, max) dari DataFrame?",
                conceptGuide: ".describe() menampilkan statistik ringkas DataFrame.",
                options: [".describe()", ".summary()", ".stats()", ".info()"],
                correctAnswer: 0,
                explanation: "Tepat! `.describe()` menampilkan statistik ringkas DataFrame.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_3_tf",
                type: "true_false",
                prompt: "Apakah Pandas DataFrame dapat membaca file CSV secara langsung menggunakan pd.read_csv()?",
                conceptGuide: "pd.read_csv() membaca file CSV menjadi DataFrame.",
                statement: "pd.read_csv() dapat membaca file CSV menjadi DataFrame.",
                correctAnswer: true,
                explanation: "Tepat! pd.read_csv() adalah cara mudah membaca CSV.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_3_cc",
                type: "code_challenge",
                prompt: "Simulasikan DataFrame: buat list records = [{'nama':'A','nilai':90},{'nama':'B','nilai':85}]. Cetak rata-rata nilai!",
                conceptGuide: "Tulis `records = [{'nama':'A','nilai':90},{'nama':'B','nilai':85}]; avg = sum(r['nilai'] for r in records) / len(records); print(avg)`.",
                starterCode: `records = [{"nama": "A", "nilai": 90}, {"nama": "B", "nilai": 85}]\navg = sum(r["nilai"] for r in records) / len(records)\nprint(avg)`,
                expectedOutput: "87.5",
                explanation: "Super! Pandas DataFrame concept dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l7_4",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "Filtering & Aggregasi Pandas",
          description: "Memfilter baris, mengelompokkan, dan mengagregatasi data Pandas.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l7_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Filter & Groupby",
              content: `\`\`\`python
# Filter baris
df_lulus = df[df["skor"] >= 80]

# Groupby & aggregasi
ringkasan = df.groupby("kota")["skor"].agg(["mean", "max", "count"])

# Query syntax
df_jkt = df.query("kota == 'Jakarta' and skor > 70")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_4_mc",
                type: "multiple_choice",
                prompt: "Syntax Pandas apakah yang digunakan untuk memfilter baris berdasarkan kondisi?",
                conceptGuide: "Boolean indexing df[df['kolom'] > nilai] adalah cara paling umum.",
                options: [
                  "df[df['kolom'] > nilai]",
                  "df.filter('kolom > nilai')",
                  "df.where('kolom', nilai)",
                  "df.select('kolom', nilai)",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Boolean indexing `df[kondisi]` untuk filter baris.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_4_po",
                type: "predict_output",
                prompt: "Berapa banyak data yang lolos filter skor >= 80 dari list berikut?",
                conceptGuide: "Filter data dengan kondisi skor >= 80.",
                code: `data = [{"n":"A","s":85},{"n":"B","s":70},{"n":"C","s":90}]\nlulus = [d for d in data if d["s"] >= 80]\nprint(len(lulus))`,
                options: ["2", "3", "1", "Error"],
                correctAnswer: "2",
                explanation: "Bener! A (85) dan C (90) lolos filter >= 80.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_4_cc",
                type: "code_challenge",
                prompt: "Dari data penjualan [{'kota':'JKT','total':500},{'kota':'BDG','total':300},{'kota':'JKT','total':700}], hitung total JKT!",
                conceptGuide: "Filter JKT lalu sum total-nya.",
                starterCode: `data = [{"kota": "JKT", "total": 500}, {"kota": "BDG", "total": 300}, {"kota": "JKT", "total": 700}]\ntotal_jkt = sum(d["total"] for d in data if d["kota"] == "JKT")\nprint(total_jkt)`,
                expectedOutput: "1200",
                explanation: "Mantap! Filter & aggregasi data Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l7_5",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "Data Cleaning & Missing Values",
          description: "Membersihkan data kotor, menangani nilai hilang, dan normalisasi data.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l7_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Data Cleaning",
              content: `\`\`\`python
# Simulasi data cleaning tanpa Pandas
data = [
    {"nama": "  Budi  ", "skor": None},
    {"nama": "Ani", "skor": 85},
    {"nama": "", "skor": 90},
]

# Bersihkan: strip whitespace & handle None
bersih = []
for d in data:
    nama = d["nama"].strip()
    if nama and d["skor"] is not None:
        bersih.append({"nama": nama, "skor": d["skor"]})

print(len(bersih))  # 1 data valid saja
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_5_mc",
                type: "multiple_choice",
                prompt: "Strategi apakah yang paling umum untuk menangani nilai hilang (missing value) dalam dataset?",
                conceptGuide: "Opsi: hapus baris, isi dengan mean/median, atau interpolasi.",
                options: [
                  "Isi dengan mean/median atau hapus baris yang bermasalah",
                  "Hentikan analisis jika ada nilai kosong",
                  "Ganti semua dengan 0",
                  "Biarkan saja karena tidak berpengaruh",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Isi dengan mean/median atau hapus baris adalah strategi umum.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_5_tf",
                type: "true_false",
                prompt: "Apakah data cleaning adalah langkah yang perlu dilakukan sebelum melakukan analisis data statistik?",
                conceptGuide: "Data cleaning memastikan analisis didasarkan pada data yang valid.",
                statement: "Data cleaning wajib dilakukan sebelum analisis statistik.",
                correctAnswer: true,
                explanation: "Tepat! Data kotor menghasilkan analisis yang salah.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_5_cc",
                type: "code_challenge",
                prompt: "Filter list data [{'n':'A','v':90},{'n':'B','v':None},{'n':'C','v':85}] yang hanya punya nilai tidak None. Cetak jumlahnya!",
                conceptGuide: "Tulis `data = [{'n':'A','v':90},{'n':'B','v':None},{'n':'C','v':85}]; valid = [d for d in data if d['v'] is not None]; print(len(valid))`.",
                starterCode: `data = [{"n": "A", "v": 90}, {"n": "B", "v": None}, {"n": "C", "v": 85}]\nvalid = [d for d in data if d["v"] is not None]\nprint(len(valid))`,
                expectedOutput: "2",
                explanation: "Super! Data cleaning berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l7_6",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "String Processing & Text Analytics",
          description: "Memproses dan menganalisis data teks menggunakan teknik NLP dasar.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l7_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Text Processing",
              content: `\`\`\`python
from collections import Counter

teks = "python adalah bahasa pemrograman python yang sangat populer"

# Tokenisasi
kata = teks.lower().split()

# Word frequency
frekuensi = Counter(kata)
print(frekuensi.most_common(3))
# [('python', 2), ('bahasa', 1), ('yang', 1)]

# Hapus stopwords
stopwords = {"yang", "adalah", "sangat"}
kata_bersih = [k for k in kata if k not in stopwords]
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_6_mc",
                type: "multiple_choice",
                prompt: "Class Python dari module collections apakah yang berguna untuk menghitung frekuensi elemen?",
                conceptGuide: "Counter menghitung frekuensi kemunculan elemen dalam iterable.",
                options: ["Counter", "defaultdict", "OrderedDict", "ChainMap"],
                correctAnswer: 0,
                explanation: "Tepat! `Counter` menghitung frekuensi elemen.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_6_po",
                type: "predict_output",
                prompt: "Apakah kata yang paling sering muncul dalam Counter berikut?",
                conceptGuide: "most_common(1) mengembalikan kata dengan frekuensi tertinggi.",
                code: `from collections import Counter\nkata = ["python", "data", "python", "web", "python"]\nc = Counter(kata)\nprint(c.most_common(1)[0][0])`,
                options: ["python", "data", "web", "Error"],
                correctAnswer: "python",
                explanation: "Bener! 'python' muncul 3 kali, paling sering.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_6_cc",
                type: "code_challenge",
                prompt: "Hitung frekuensi kata dalam 'belajar python belajar data belajar'. Cetak frekuensi kata 'belajar'!",
                conceptGuide: "Tulis `from collections import Counter; kata = 'belajar python belajar data belajar'.split(); c = Counter(kata); print(c['belajar'])`.",
                starterCode: `from collections import Counter\nkata = "belajar python belajar data belajar".split()\nc = Counter(kata)\nprint(c["belajar"])`,
                expectedOutput: "3",
                explanation: "Mantap! Text processing Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l7_7",
          language: "python",
          sectionId: "py_sec_7",
          sectionTitle: "07 Data Processing & Pandas",
          title: "Data Transformation Pipeline",
          description: "Membangun pipeline transformasi data yang dapat dicompose dan digunakan ulang.",
          icon: "box",
          xp: 40,
          prerequisites: ["py_l7_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Data Pipeline",
              content: `\`\`\`python
from typing import Callable, List

# Fungsi-fungsi transformasi
def hapus_duplikat(data: list) -> list:
    return list(dict.fromkeys(data))

def normalisasi(data: List[float]) -> List[float]:
    mx, mn = max(data), min(data)
    return [(x - mn) / (mx - mn) for x in data] if mx != mn else data

def pipeline(*fungsi: Callable):
    def jalankan(data):
        hasil = data
        for f in fungsi:
            hasil = f(hasil)
        return hasil
    return jalankan

# Gunakan pipeline
proses = pipeline(hapus_duplikat, sorted)
print(proses([3, 1, 2, 3, 1]))  # [1, 2, 3]
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_7_7_mc",
                type: "multiple_choice",
                prompt: "Apa keunggulan pola pipeline dalam data processing?",
                conceptGuide: "Pipeline membuat transformasi mudah dikomposisi, ditest, dan digunakan ulang.",
                options: [
                  "Transformasi mudah dikomposisi, ditest, dan digunakan ulang",
                  "Mempercepat pemrosesan data secara dramatis",
                  "Mengurangi penggunaan memori",
                  "Tidak ada keunggulan khusus",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Pipeline membuat kode transformasi modular dan reusable.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_7_7_po",
                type: "predict_output",
                prompt: "Apakah output dari pipeline hapus duplikat + sort pada list [3,1,2,3,1]?",
                conceptGuide: "Hapus duplikat: {1,2,3}. Sort: [1,2,3].",
                code: `data = [3, 1, 2, 3, 1]\nunik = list(dict.fromkeys(data))\nhasil = sorted(unik)\nprint(hasil)`,
                options: ["[1, 2, 3]", "[3, 1, 2]", "[1, 1, 2, 3, 3]", "Error"],
                correctAnswer: "[1, 2, 3]",
                explanation: "Bener! Hapus duplikat + sort = [1, 2, 3].",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_7_7_cc",
                type: "code_challenge",
                prompt: "Buat pipeline: hapus duplikat dari [5,3,5,1,3,2], sort ascending, lalu cetak hasilnya!",
                conceptGuide: "Tulis `data = [5,3,5,1,3,2]; unik = list(dict.fromkeys(data)); print(sorted(unik))`.",
                starterCode: `data = [5, 3, 5, 1, 3, 2]\nunik = list(dict.fromkeys(data))\nprint(sorted(unik))`,
                expectedOutput: "[1, 2, 3, 5]",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 7 Lesson pada Section 07 Data Processing!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_8",
      title: "08 REST API & Flask/FastAPI (8 Lesson)",
      description: "HTTP server Python, routing, request/response, validasi, middleware, database, dan Auth.",
      lessons: [
        {
          id: "py_l8_1",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Flask: Web Framework Minimal",
          description: "Membangun REST API sederhana menggunakan Flask micro web framework.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l7_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Flask REST API",
              content: `\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/halo", methods=["GET"])
def halo():
    return jsonify({"pesan": "Halo dari Flask!"})

@app.route("/api/users", methods=["POST"])
def buat_user():
    data = request.json
    return jsonify({"id": 1, **data}), 201

if __name__ == "__main__":
    app.run(debug=True)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_1_mc",
                type: "multiple_choice",
                prompt: "Decorator Flask apakah yang digunakan untuk mendefinisikan route dan method HTTP yang diterima?",
                conceptGuide: "@app.route() mendefinisikan URL route dan method HTTP.",
                options: ["@app.route()", "@app.url()", "@app.endpoint()", "@app.handler()"],
                correctAnswer: 0,
                explanation: "Tepat! `@app.route()` mendefinisikan route di Flask.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_1_tf",
                type: "true_false",
                prompt: "Apakah Flask jsonify() otomatis mengatur Content-Type header ke application/json?",
                conceptGuide: "jsonify() membuat Response dengan Content-Type: application/json.",
                statement: "Flask jsonify() otomatis mengatur Content-Type ke application/json.",
                correctAnswer: true,
                explanation: "Tepat! jsonify() sekaligus set Content-Type header.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan Flask route: buat fungsi halo() yang mengembalikan dict {'pesan': 'Halo API!'}. Cetak hasilnya!",
                conceptGuide: "Tulis `def halo(): return {'pesan': 'Halo API!'}; print(halo()['pesan'])`.",
                starterCode: `def halo():\n    return {"pesan": "Halo API!"}\nprint(halo()["pesan"])`,
                expectedOutput: "Halo API!",
                explanation: "Sip! Flask REST API concept dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_2",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "FastAPI: Type-Safe Modern API",
          description: "Membangun API modern dengan type safety, validasi otomatis, dan dokumentasi Swagger.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "FastAPI",
              content: `\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    nama: str
    email: str
    umur: int = 0

@app.get("/users")
async def get_users():
    return [{"id": 1, "nama": "Kadez"}]

@app.post("/users", status_code=201)
async def buat_user(user: User):
    return {"id": 2, **user.dict()}
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_2_mc",
                type: "multiple_choice",
                prompt: "Library apa yang digunakan FastAPI untuk validasi request body secara otomatis?",
                conceptGuide: "Pydantic melakukan validasi dan parsing data request di FastAPI.",
                options: ["Pydantic", "Marshmallow", "Cerberus", "Voluptuous"],
                correctAnswer: 0,
                explanation: "Tepat! FastAPI menggunakan Pydantic untuk validasi data.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_2_tf",
                type: "true_false",
                prompt: "Apakah FastAPI secara otomatis menghasilkan dokumentasi API interaktif (Swagger UI) di endpoint /docs?",
                conceptGuide: "FastAPI otomatis generate Swagger UI di /docs.",
                statement: "FastAPI otomatis generate Swagger UI di endpoint /docs.",
                correctAnswer: true,
                explanation: "Tepat! FastAPI otomatis menghasilkan dokumentasi Swagger.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_2_cc",
                type: "code_challenge",
                prompt: "Simulasikan Pydantic model: buat class User dengan nama str dan email str. Buat User dan cetak namanya!",
                conceptGuide: "Gunakan dataclass atau dict untuk simulasi.",
                starterCode: `from dataclasses import dataclass\n\n@dataclass\nclass User:\n    nama: str\n    email: str\n\nu = User(nama="Kadez", email="k@mail.com")\nprint(u.nama)`,
                expectedOutput: "Kadez",
                explanation: "Keren! FastAPI Pydantic model dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_3",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Request Validation & Error Handling",
          description: "Memvalidasi input request dan mengirimkan respons error yang informatif.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Validasi & Error Handling",
              content: `\`\`\`python
from fastapi import FastAPI, HTTPException

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    if user_id <= 0:
        raise HTTPException(
            status_code=400,
            detail="ID harus bilangan positif"
        )
    user = cari_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User tidak ditemukan")
    return user
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_3_mc",
                type: "multiple_choice",
                prompt: "HTTP status code apakah yang paling tepat untuk error 'Resource tidak ditemukan'?",
                conceptGuide: "404 Not Found untuk resource yang tidak ada.",
                options: ["404 Not Found", "400 Bad Request", "403 Forbidden", "500 Internal Error"],
                correctAnswer: 0,
                explanation: "Tepat! 404 Not Found untuk resource yang tidak ditemukan.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_3_tf",
                type: "true_false",
                prompt: "Apakah 400 Bad Request adalah status code yang tepat untuk error validasi input dari pengguna?",
                conceptGuide: "400 Bad Request untuk input yang tidak valid dari client.",
                statement: "400 Bad Request tepat untuk error validasi input dari pengguna.",
                correctAnswer: true,
                explanation: "Tepat! 400 untuk input tidak valid dari client.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_3_cc",
                type: "code_challenge",
                prompt: "Buat fungsi validasi_id(id: int) yang raise ValueError jika id <= 0, atau return True. Cetak validasi_id(5)!",
                conceptGuide: "Tulis `def validasi_id(id):\\n    if id <= 0: raise ValueError('ID tidak valid')\\n    return True\\nprint(validasi_id(5))`.",
                starterCode: `def validasi_id(id: int) -> bool:\n    if id <= 0:\n        raise ValueError("ID tidak valid")\n    return True\nprint(validasi_id(5))`,
                expectedOutput: "True",
                explanation: "Super! Request validation Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_4",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Database SQLite dengan SQLAlchemy",
          description: "Menghubungkan API Python ke database SQLite menggunakan SQLAlchemy ORM.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "SQLAlchemy ORM",
              content: `\`\`\`python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, Session

Base = declarative_base()

class Produk(Base):
    __tablename__ = "produk"
    id = Column(Integer, primary_key=True)
    nama = Column(String(100))
    harga = Column(Integer)

engine = create_engine("sqlite:///app.db")
Base.metadata.create_all(engine)

# CRUD
with Session(engine) as session:
    baru = Produk(nama="Laptop", harga=15000)
    session.add(baru)
    session.commit()
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_4_mc",
                type: "multiple_choice",
                prompt: "Apa perbedaan antara penggunaan ORM (seperti SQLAlchemy) dan SQL mentah untuk akses database?",
                conceptGuide: "ORM menghindari SQL injection, lebih aman, dan kode lebih portable.",
                options: [
                  "ORM lebih aman dari SQL injection dan kode lebih portable",
                  "SQL mentah selalu lebih cepat",
                  "ORM tidak bisa melakukan JOIN",
                  "SQL mentah lebih mudah dipelajari",
                ],
                correctAnswer: 0,
                explanation: "Tepat! ORM lebih aman dan kode lebih portable.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_4_tf",
                type: "true_false",
                prompt: "Apakah SQLAlchemy ORM dapat digunakan dengan berbagai jenis database (SQLite, PostgreSQL, MySQL) tanpa mengubah kode model?",
                conceptGuide: "SQLAlchemy mendukung multi-database dengan koneksi string yang berbeda.",
                statement: "SQLAlchemy ORM mendukung berbagai database tanpa mengubah kode model.",
                correctAnswer: true,
                explanation: "Tepat! SQLAlchemy adalah database-agnostic ORM.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan ORM session: buat list db = []. Tambahkan {'nama': 'Laptop', 'harga': 15000} dan cetak db[0]['nama']!",
                conceptGuide: "Tulis `db = []; db.append({'nama': 'Laptop', 'harga': 15000}); print(db[0]['nama'])`.",
                starterCode: `db = []\ndb.append({"nama": "Laptop", "harga": 15000})\nprint(db[0]["nama"])`,
                expectedOutput: "Laptop",
                explanation: "Mantap! SQLAlchemy ORM concept dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_5",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Authentication: JWT Token",
          description: "Mengimplementasikan autentikasi berbasis JSON Web Token (JWT) di REST API Python.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "JWT Authentication",
              content: `\`\`\`python
import jwt
from datetime import datetime, timedelta

SECRET = "rahasia_super_kuat"

def buat_token(user_id: int) -> str:
    payload = {
        "sub": user_id,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, SECRET, algorithm="HS256")

def verifikasi_token(token: str) -> dict:
    return jwt.decode(token, SECRET, algorithms=["HS256"])
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_5_mc",
                type: "multiple_choice",
                prompt: "Di header HTTP manakah JWT token biasanya dikirimkan dari client ke server?",
                conceptGuide: "JWT dikirim di header Authorization dengan format 'Bearer <token>'.",
                options: [
                  "Authorization: Bearer <token>",
                  "X-Auth-Token: <token>",
                  "Token: <token>",
                  "Cookie: <token>",
                ],
                correctAnswer: 0,
                explanation: "Tepat! JWT dikirim di header `Authorization: Bearer <token>`.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_5_tf",
                type: "true_false",
                prompt: "Apakah payload JWT (bagian tengah token) dienkripsi sehingga tidak bisa dibaca oleh siapapun?",
                conceptGuide: "JWT payload hanya di-encode Base64, tidak dienkripsi, bisa dibaca siapa saja.",
                statement: "JWT payload dienkripsi dan tidak bisa dibaca tanpa secret key.",
                correctAnswer: false,
                explanation: "Tepat! JWT payload hanya Base64-encoded, bisa dibaca siapapun.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan JWT payload: buat dict payload = { 'sub': 42, 'role': 'admin' }. Cetak payload['sub']!",
                conceptGuide: "Tulis `payload = {'sub': 42, 'role': 'admin'}; print(payload['sub'])`.",
                starterCode: `payload = {"sub": 42, "role": "admin"}\nprint(payload["sub"])`,
                expectedOutput: "42",
                explanation: "Keren! JWT Authentication concept dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_6",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Middleware & Rate Limiting",
          description: "Menambahkan middleware untuk logging, CORS, dan rate limiting pada REST API.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "API Middleware",
              content: `\`\`\`python
from functools import wraps
from time import time
from collections import defaultdict

# Rate limiter sederhana
call_history = defaultdict(list)

def rate_limit(max_per_menit: int):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            now = time()
            call_history[func.__name__] = [
                t for t in call_history[func.__name__]
                if now - t < 60
            ]
            if len(call_history[func.__name__]) >= max_per_menit:
                raise Exception("Rate limit tercapai!")
            call_history[func.__name__].append(now)
            return func(*args, **kwargs)
        return wrapper
    return decorator
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_6_mc",
                type: "multiple_choice",
                prompt: "Apa tujuan utama Rate Limiting pada REST API?",
                conceptGuide: "Rate limiting mencegah abuse dan melindungi server dari overload.",
                options: [
                  "Mencegah abuse dan melindungi server dari overload request",
                  "Mempercepat respons API",
                  "Mengenkripsi data yang dikirim",
                  "Mengkompresi response body",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Rate limiting melindungi API dari abuse dan overload.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_6_tf",
                type: "true_false",
                prompt: "Apakah CORS (Cross-Origin Resource Sharing) perlu diaktifkan di server agar browser bisa mengakses API dari domain yang berbeda?",
                conceptGuide: "CORS harus dikonfigurasi di server untuk mengizinkan cross-origin request.",
                statement: "CORS harus diaktifkan di server untuk mengizinkan cross-origin browser request.",
                correctAnswer: true,
                explanation: "Tepat! CORS dikontrol dari sisi server.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_6_cc",
                type: "code_challenge",
                prompt: "Simulasikan rate limit: buat list requests = []. Cek apakah kurang dari 3 request, jika ya tambah, cetak 'Request Diterima'!",
                conceptGuide: "Tulis `requests = []; requests.append(1); print('Request Diterima' if len(requests) <= 3 else 'Rate Limited')`.",
                starterCode: `requests = []\nrequests.append(1)\nprint("Request Diterima" if len(requests) <= 3 else "Rate Limited")`,
                expectedOutput: "Request Diterima",
                explanation: "Super! Rate limiting concept dipahami.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_7",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Unit Testing dengan pytest",
          description: "Menulis unit test untuk fungsi dan API menggunakan framework pytest.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "pytest Testing",
              content: `\`\`\`python
# test_kalkulasi.py
import pytest
from kalkulasi import tambah, bagi

def test_tambah_positif():
    assert tambah(2, 3) == 5

def test_tambah_negatif():
    assert tambah(-1, 1) == 0

def test_bagi_normal():
    assert bagi(10, 2) == 5.0

def test_bagi_nol():
    with pytest.raises(ZeroDivisionError):
        bagi(10, 0)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_7_mc",
                type: "multiple_choice",
                prompt: "Keyword Python apakah yang digunakan dalam pytest untuk memverifikasi bahwa nilai yang dihasilkan sesuai ekspektasi?",
                conceptGuide: "assert memverifikasi kondisi yang harus bernilai True.",
                options: ["assert", "verify", "check", "expect"],
                correctAnswer: 0,
                explanation: "Tepat! `assert` digunakan dalam pytest untuk verifikasi.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_7_tf",
                type: "true_false",
                prompt: "Apakah pytest.raises() digunakan untuk memastikan bahwa sebuah fungsi melempar exception tertentu?",
                conceptGuide: "pytest.raises() menangkap dan memverifikasi exception yang diharapkan.",
                statement: "pytest.raises() memverifikasi bahwa fungsi melempar exception yang diharapkan.",
                correctAnswer: true,
                explanation: "Tepat! pytest.raises() untuk test exception.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_7_cc",
                type: "code_challenge",
                prompt: "Tulis assertion test: buat fungsi tambah(a,b) = a+b. Assert bahwa tambah(3,4) == 7. Cetak 'Test Lulus' jika assert tidak gagal!",
                conceptGuide: "Tulis `def tambah(a,b): return a+b; assert tambah(3,4) == 7; print('Test Lulus')`.",
                starterCode: `def tambah(a, b):\n    return a + b\nassert tambah(3, 4) == 7\nprint("Test Lulus")`,
                expectedOutput: "Test Lulus",
                explanation: "Mantap! pytest testing Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l8_8",
          language: "python",
          sectionId: "py_sec_8",
          sectionTitle: "08 REST API & Flask/FastAPI",
          title: "Automation & Scripting",
          description: "Mengotomatisasi tugas berulang menggunakan Python scripting dan subprocess.",
          icon: "building",
          xp: 40,
          prerequisites: ["py_l8_7"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Python Automation",
              content: `\`\`\`python
import os
import subprocess
from pathlib import Path

# Buat banyak folder sekaligus
for bulan in ["Jan", "Feb", "Mar"]:
    Path(f"laporan/{bulan}").mkdir(parents=True, exist_ok=True)

# Jalankan command shell
hasil = subprocess.run(
    ["git", "status"],
    capture_output=True, text=True
)
print(hasil.stdout)

# Rename semua file .txt ke .md
for file in Path(".").glob("*.txt"):
    file.rename(file.with_suffix(".md"))
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_8_8_mc",
                type: "multiple_choice",
                prompt: "Module Python bawaan apakah yang digunakan untuk menjalankan perintah shell eksternal?",
                conceptGuide: "subprocess.run() menjalankan command shell dari Python.",
                options: ["subprocess", "os.system", "shell", "cmd"],
                correctAnswer: 0,
                explanation: "Tepat! `subprocess` adalah module modern untuk menjalankan perintah shell.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_8_8_tf",
                type: "true_false",
                prompt: "Apakah Path.glob() di pathlib bisa digunakan untuk mencari file berdasarkan pola wildcard seperti '*.csv'?",
                conceptGuide: "Path.glob() mendukung pattern matching seperti '*.csv'.",
                statement: "Path.glob() mendukung pattern matching seperti '*.csv'.",
                correctAnswer: true,
                explanation: "Tepat! glob() mendukung wildcard pattern matching.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_8_8_cc",
                type: "code_challenge",
                prompt: "Simulasikan automation: buat list files = ['a.txt', 'b.txt', 'c.txt']. Ubah ekstensi ke .md dan cetak file pertama!",
                conceptGuide: "Tulis `files = ['a.txt','b.txt','c.txt']; md = [f.replace('.txt','.md') for f in files]; print(md[0])`.",
                starterCode: `files = ["a.txt", "b.txt", "c.txt"]\nmd = [f.replace(".txt", ".md") for f in files]\nprint(md[0])`,
                expectedOutput: "a.md",
                explanation: "LUAR BIASA! Kamu menuntaskan seluruh 8 Lesson pada Section 08 REST API & FastAPI!",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "py_sec_9",
      title: "09 Master Python Projects (6 Lesson)",
      description: "Proyek master: CLI Tool, Data Analysis, Web Scraper, Mini API, dan Final Assessment.",
      lessons: [
        {
          id: "py_l9_1",
          language: "python",
          sectionId: "py_sec_9",
          sectionTitle: "09 Master Python Projects",
          title: "Design Patterns: Singleton & Factory",
          description: "Mengimplementasikan pola desain Singleton dan Factory untuk kode yang lebih terstruktur.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["py_l8_8"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Design Patterns",
              content: `\`\`\`python
# Singleton Pattern
class KonfigurasiApp:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.debug = False
        return cls._instance

config1 = KonfigurasiApp()
config2 = KonfigurasiApp()
print(config1 is config2)  # True (objek yang sama)
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_9_1_mc",
                type: "multiple_choice",
                prompt: "Apa yang dijamin oleh Singleton Pattern?",
                conceptGuide: "Singleton memastikan hanya ada satu instance dari class sepanjang runtime.",
                options: [
                  "Hanya ada satu instance dari class yang dapat dibuat",
                  "Class tidak bisa diwariskan",
                  "Method dapat dipanggil secara paralel",
                  "Objek selalu di-cache di memori",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Singleton menjamin satu instance global.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_9_1_tf",
                type: "true_false",
                prompt: "Apakah Factory Pattern memungkinkan pembuatan objek tanpa mengetahui class konkret mana yang akan diinstansiasi?",
                conceptGuide: "Factory Pattern menyembunyikan logika pembuatan objek dari pemanggil.",
                statement: "Factory Pattern menyembunyikan detail pembuatan objek konkret dari pemanggil.",
                correctAnswer: true,
                explanation: "Tepat! Factory Pattern abstraksi pembuatan objek.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_9_1_cc",
                type: "code_challenge",
                prompt: "Simulasikan Singleton: buat class Config dengan class var _inst = None. Pastikan dua instance adalah objek yang sama!",
                conceptGuide: "Tulis class Config dengan __new__ yang cek _inst, lalu buat 2 instance dan cek apakah identik.",
                starterCode: `class Config:\n    _inst = None\n    def __new__(cls):\n        if cls._inst is None:\n            cls._inst = super().__new__(cls)\n        return cls._inst\n\na = Config()\nb = Config()\nprint(a is b)`,
                expectedOutput: "True",
                explanation: "Sip! Singleton Pattern Python berhasil diimplementasikan.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l9_2",
          language: "python",
          sectionId: "py_sec_9",
          sectionTitle: "09 Master Python Projects",
          title: "Type Hints & Protocol",
          description: "Menulis kode Python yang sepenuhnya terberi tipe menggunakan type hints modern dan Protocol.",
          icon: "trophy",
          xp: 40,
          prerequisites: ["py_l9_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Modern Type Hints",
              content: `\`\`\`python
from typing import Protocol, TypeVar, Generic

T = TypeVar("T")

class Repository(Protocol[T]):
    def cari(self, id: int) -> T | None: ...
    def simpan(self, item: T) -> None: ...

# Generic class
class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []
    
    def push(self, item: T) -> None:
        self._items.append(item)
    
    def pop(self) -> T:
        return self._items.pop()
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_9_2_mc",
                type: "multiple_choice",
                prompt: "Apakah keunggulan Protocol dibanding Abstract Base Class (ABC) untuk mendefinisikan kontrak interface?",
                conceptGuide: "Protocol mendukung structural subtyping (duck typing yang tersertifikasi tipe).",
                options: [
                  "Mendukung structural subtyping tanpa perlu inheritance eksplisit",
                  "Protocol lebih cepat dari ABC",
                  "Protocol tidak membutuhkan import",
                  "ABC lebih fleksibel dari Protocol",
                ],
                correctAnswer: 0,
                explanation: "Tepat! Protocol mendukung structural subtyping.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_9_2_tf",
                type: "true_false",
                prompt: "Apakah TypeVar di Python digunakan untuk membuat fungsi atau class yang generik (bekerja untuk berbagai tipe)?",
                conceptGuide: "TypeVar mendefinisikan variabel tipe untuk generic programming.",
                statement: "TypeVar digunakan untuk mendefinisikan variabel tipe di generic class/function.",
                correctAnswer: true,
                explanation: "Tepat! TypeVar adalah dasar generic programming Python.",
                xpReward: 10,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_9_2_cc",
                type: "code_challenge",
                prompt: "Buat fungsi generic pertama(data: list) yang mengembalikan elemen pertama list. Cetak pertama([10, 20, 30])!",
                conceptGuide: "Tulis `def pertama(data: list): return data[0]; print(pertama([10, 20, 30]))`.",
                starterCode: `def pertama(data: list):\n    return data[0]\nprint(pertama([10, 20, 30]))`,
                expectedOutput: "10",
                explanation: "Keren! Type hints & generics Python berhasil.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_l9_3",
          language: "python",
          sectionId: "py_sec_9",
          sectionTitle: "09 Master Python Projects",
          title: "Mini-Project: CLI Data Analyzer",
          description: "Membangun alat analisis data CSV command-line dengan argparse dan statistik.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["py_l9_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "CLI Data Analyzer",
              content: `Mini-project membangun CLI tool yang menerima file CSV sebagai input, lalu menghasilkan laporan statistik.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_9_3_cc",
                type: "code_challenge",
                prompt: "Buat mini data analyzer: dari data = [78,85,90,72,88], hitung mean, max, min dan cetak dalam format ringkasan!",
                conceptGuide: "Tulis `data = [78,85,90,72,88]; print(f'Mean:{sum(data)/len(data):.1f} Max:{max(data)} Min:{min(data)}')`.",
                starterCode: `data = [78, 85, 90, 72, 88]\nprint(f"Mean:{sum(data)/len(data):.1f} Max:{max(data)} Min:{min(data)}")`,
                expectedOutput: "Mean:82.6 Max:90 Min:72",
                explanation: "Hebat! Mini-Project CLI Data Analyzer berhasil!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "py_l9_4",
          language: "python",
          sectionId: "py_sec_9",
          sectionTitle: "09 Master Python Projects",
          title: "Mini-Project: Web Scraper Pipeline",
          description: "Membangun pipeline scraping web yang mengambil, membersihkan, dan menyimpan data.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["py_l9_3"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Web Scraper Pipeline",
              content: `Mini-project membangun web scraper yang mengambil berita, membersihkan teks, dan mengekstrak insight.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_9_4_cc",
                type: "code_challenge",
                prompt: "Simulasikan scraper pipeline: buat list articles = ['  Berita A  ', 'Berita B  ', '  Berita C']. Bersihkan whitespace dan cetak yang unik!",
                conceptGuide: "Tulis `articles = ['  Berita A  ', 'Berita B  ', '  Berita C']; bersih = list(dict.fromkeys(a.strip() for a in articles)); print(len(bersih))`.",
                starterCode: `articles = ["  Berita A  ", "Berita B  ", "  Berita C"]\nbersih = list(dict.fromkeys(a.strip() for a in articles))\nprint(len(bersih))`,
                expectedOutput: "3",
                explanation: "Luar biasa! Mini-Project Web Scraper Pipeline berhasil!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "py_l9_5",
          language: "python",
          sectionId: "py_sec_9",
          sectionTitle: "09 Master Python Projects",
          title: "Mini-Project: Async Task Queue",
          description: "Membangun task queue asynchronous sederhana untuk memproses tugas secara concurrent.",
          icon: "trophy",
          xp: 50,
          prerequisites: ["py_l9_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Async Task Queue",
              content: `Mini-project membangun task queue yang memproses tugas secara asynchronous.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_9_5_cc",
                type: "code_challenge",
                prompt: "Simulasikan async task queue: buat list tasks = [1,2,3]. Proses setiap task (multiply 10). Cetak hasil task terakhir!",
                conceptGuide: "Tulis `tasks = [1,2,3]; hasil = [t*10 for t in tasks]; print(hasil[-1])`.",
                starterCode: `tasks = [1, 2, 3]\nhasil = [t * 10 for t in tasks]\nprint(hasil[-1])`,
                expectedOutput: "30",
                explanation: "Mantap! Async Task Queue berhasil disimulasikan!",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "py_l9_6",
          language: "python",
          sectionId: "py_sec_9",
          sectionTitle: "09 Master Python Projects",
          title: "Final Assessment: Full-Stack Python Master",
          description: "Ujian akhir kelulusan kurikulum Python 65 Lesson.",
          icon: "trophy",
          xp: 100,
          prerequisites: ["py_l9_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Final Python Master Challenge",
              content: `SELAMAT! Kamu telah menyelesaikan seluruh Kurikulum Python 65 Lesson!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_9_6_cc",
                type: "code_challenge",
                prompt: "LEVEL MASTER: Buat fungsi master_python() yang mengembalikan 'MASTER PYTHON KADEZ' dan cetak ke konsol!",
                conceptGuide: "Tulis `def master_python(): return \"MASTER PYTHON KADEZ\"; print(master_python())`.",
                starterCode: `def master_python():\n    return "MASTER PYTHON KADEZ"\nprint(master_python())`,
                expectedOutput: "MASTER PYTHON KADEZ",
                explanation: "SELAMAT! KAMU RESMI MENJADI MASTER PYTHON LULUSAN CODEQUEST 65 LESSON!",
                xpReward: 50,
              },
            },
          ],
        },
      ],
    },
  ],
};
