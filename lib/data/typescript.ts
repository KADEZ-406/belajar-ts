import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript (Kurikulum Lengkap 50+ Materi)",
  description: "Kurikulum super-lengkap dari dasar variabel, tipe primitif, array, tuple, fungsi, interface, generics, hingga level Master arsitektur CRUD dan Auth Engine.",
  icon: "book-open",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Fondasi Utama & Sintaks Dasar (12 Materi)",
      description: "Pahami tipe data primitif, anotasi variabel, dan cara kerja kompilasi dari nol.",
      lessons: [
        {
          id: "ts_l1_1",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Pengenalan & Kompilasi TypeScript",
          description: "Mengapa TypeScript digunakan developer dunia dan cara kerja pengompilasi (tsc).",
          icon: "rocket",
          xp: 30,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Apa itu TypeScript?",
              content: `TypeScript adalah versi super dari JavaScript yang dilengkapi sistem tipe data statis.

Kenapa dev pada suka TypeScript?
1. Menemukan bug atau eror langsung saat koding (sebelum di-run).
2. Auto-complete di editor (VS Code) jadi makin pintar.
3. Kodenya gampang dibaca karena tipe data variabelnya jelas banget.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_1",
                type: "true_false",
                prompt: "Apakah browser bisa langsung menjalankan kode TypeScript secara native tanpa perlu dikompilasi?",
                conceptGuide: "Browser (Chrome, Edge, Firefox) hanya bisa menjalankan JavaScript. Kode TypeScript harus di-compile dulu ke JavaScript biasa pakai alat pengompilasi (tsc).",
                statement: "Browser bisa menjalankan TypeScript secara langsung.",
                correctAnswer: false,
                explanation: "Mantap! Kode TypeScript harus di-compile dulu jadi JavaScript standar sebelum dijalankan di browser.",
                xpReward: 10,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_2",
                type: "code_challenge",
                prompt: "Tuliskan perintah console.log untuk mencetak kalimat 'Halo TypeScript!'",
                conceptGuide: "Perintah `console.log(\"Teks\");` digunakan untuk mencetak pesan ke konsol.",
                starterCode: `// Tulis kode kamu di bawah ini\n`,
                expectedOutput: "Halo TypeScript!",
                explanation: "Keren! Kamu berhasil mencetak pesan pertama kamu di TypeScript.",
                xpReward: 20,
              },
            },
          ],
        },
        {
          id: "ts_l1_2",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Tipe Data String",
          description: "Mengolah variabel teks menggunakan kutip tunggal, ganda, dan template literals.",
          icon: "tag",
          xp: 35,
          prerequisites: ["ts_l1_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Data String",
              content: `Tipe data string digunakan untuk menyimpan data teks.

Contoh penulisan:
let nama: string = "Budi";
let sapaan: string = 'Halo Dunia';
let template: string = \`Selamat datang, \${nama}\`;`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3",
                type: "code_completion",
                prompt: "Lengkapi tipe data variabel nama berikut!",
                conceptGuide: "Teks didefinisikan menggunakan tipe data `string`.",
                template: "let nama: ___ = \"Budi\";",
                options: ["string", "number", "boolean", "any"],
                correctAnswer: "string",
                explanation: "Tepat sekali! Teks menggunakan tipe `string`.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_3",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Tipe Data Number",
          description: "Mengatur data angka bulat, desimal, dan perhitungan matematis.",
          icon: "tag",
          xp: 35,
          prerequisites: ["ts_l1_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Data Number",
              content: `Di TypeScript, semua jenis angka (bulat maupun desimal) menggunakan tipe \`number\`.

Contoh:
let umur: number = 25;
let harga: number = 99.9;`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4",
                type: "fix_code",
                prompt: "Perbaiki eror tipe data pada variabel harga berikut!",
                conceptGuide: "Variabel bertipe number tidak boleh diberi nilai berkutip seperti \"25\".",
                buggyCode: `let harga: number = "25";\nconsole.log(harga);`,
                correctCode: `let harga: number = 25;\nconsole.log(harga);`,
                hint: "Hapus tanda kutip dari angka 25",
                explanation: "Super! Angka tidak memakai tanda kutip.",
                xpReward: 20,
              },
            },
          ],
        },
        {
          id: "ts_l1_4",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Tipe Data Boolean",
          description: "Menyimpan nilai logika benar (true) atau salah (false).",
          icon: "tag",
          xp: 35,
          prerequisites: ["ts_l1_3"],
          steps: [
            {
              id: "step_1",
              type: "exercise",
              exercise: {
                id: "ts_ex_5",
                type: "code_completion",
                prompt: "Lengkapi tipe data logika untuk variabel isAktif berikut!",
                conceptGuide: "Tipe data logika true/false menggunakan kata kunci `boolean`.",
                template: "let isAktif: ___ = true;",
                options: ["boolean", "bool", "string", "number"],
                correctAnswer: "boolean",
                explanation: "Mantap! `boolean` digunakan untuk logika true/false.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_5",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Deklarasi Variabel (let vs const)",
          description: "Memahami kapan memakai let untuk nilai dinamis dan const untuk nilai tetap.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l1_4"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "let vs const",
              content: `Gunakan \`const\` untuk variabel konstanta yang nilainya tidak boleh diubah.
Gunakan \`let\` jika nilai variabel akan diubah di kemudian baris.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_6",
                type: "predict_output",
                prompt: "Apa hasil cetakan variabel konstanta berikut?",
                conceptGuide: "Variabel `const` menyimpan nilai awal dan tidak berubah.",
                code: `const nama: string = "Kadez";\nconsole.log("Halo " + nama);`,
                options: ["Halo Kadez", "HaloKadez", "Error", "undefined"],
                correctAnswer: "Halo Kadez",
                explanation: "Bener banget! Teks digabungkan dengan rapi.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "ts_l1_6",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Type Inference (Penentuan Tipe Otomatis)",
          description: "Kemampuan TypeScript menebak tipe data secara otomatis.",
          icon: "settings",
          xp: 40,
          prerequisites: ["ts_l1_5"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Apa itu Type Inference?",
              content: `Jika kita langsung memberi nilai awal saat membuat variabel, TypeScript bisa menebak tipenya secara otomatis tanpa perlu kita tulis manual.

Contoh:
let kota = "Jakarta"; // TypeScript otomatis tahu tipenya string!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_7",
                type: "true_false",
                prompt: "Apakah TypeScript tetap bisa menebak tipe data variabel meskipun kita tidak menuliskan anotasi tipe data secara manual?",
                conceptGuide: "Fitur Type Inference memungkinkan TypeScript menentukan tipe variabel berdasarkan nilai awal yang diberikan.",
                statement: "TypeScript bisa menebak tipe data secara otomatis lewat nilai awal.",
                correctAnswer: true,
                explanation: "Tepat sekali! Fitur ini dinamakan Type Inference.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_2",
      title: "02 Array, Tuple, & Struktur Data (10 Materi)",
      description: "Array bertipe homogen, Tuple berurutan, dan iterasi array.",
      lessons: [
        {
          id: "ts_l2_1",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Array, Tuple, & Struktur Data",
          title: "Array Bertipe Homogen",
          description: "Membuat array yang hanya menampung satu tipe data spesifik.",
          icon: "box",
          xp: 50,
          prerequisites: ["ts_l1_6"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Array di TypeScript",
              content: `Array bertipe meminimalisir eror item salah tipe.

Sintaks:
let daftarAngka: number[] = [1, 2, 3];
let daftarNama: string[] = ["Budi", "Siti"];`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_8",
                type: "arrange_code",
                prompt: "Susun kode berikut untuk membuat array angka bertipe number[]!",
                conceptGuide: "Sintaks array angka adalah `let angka: number[] = [10, 20];`.",
                codeSnippets: ["let angka: number[]", " = ", "[10, 20];"],
                correctOrder: ["let angka: number[]", " = ", "[10, 20];"],
                explanation: "Sip! Array bertipe berhasil dibuat.",
                xpReward: 20,
              },
            },
          ],
        },
        {
          id: "ts_l2_2",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Array, Tuple, & Struktur Data",
          title: "Konsep Tuple di TypeScript",
          description: "Array dengan jumlah elemen dan urutan tipe data yang sudah pasti.",
          icon: "box",
          xp: 55,
          prerequisites: ["ts_l2_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Apa itu Tuple?",
              content: `Tuple adalah array spesial yang jumlah elemen dan urutan tipe datanya sudah ditentukan secara ketat.

Contoh:
let user: [string, number] = ["Budi", 25];`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_9",
                type: "code_completion",
                prompt: "Lengkapi tipe data Tuple untuk variabel pasangan teks dan angka!",
                conceptGuide: "Tipe tuple ditulis di dalam kurung siku `[string, number]`.",
                template: "let data: [string, ___] = [\"Kota\", 100];",
                options: ["number", "string", "boolean", "any"],
                correctAnswer: "number",
                explanation: "Bener banget! Elemen kedua pada tuple tersebut bertipe number.",
                xpReward: 20,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_3",
      title: "03 Fungsi, Parameter, & Return Types (10 Materi)",
      description: "Function Declarations, Arrow Functions, dan Optional Parameters.",
      lessons: [
        {
          id: "ts_l3_1",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Fungsi, Parameter, & Return Types",
          title: "Function Signatures & Return Types",
          description: "Menentukan tipe data parameter dan nilai kembalian fungsi.",
          icon: "zap",
          xp: 60,
          prerequisites: ["ts_l2_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Fungsi Bertipe",
              content: `Di TypeScript, kita wajib menentukan tipe data parameter fungsi dan tipe kembaliannya.

Contoh:
function tambah(a: number, b: number): number {
  return a + b;
}`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_10",
                type: "code_challenge",
                prompt: "Buat fungsi hitungLuas(panjang: number, lebar: number): number yang mengembalikan perkalian keduanya!",
                conceptGuide: "Tulis `function hitungLuas(panjang: number, lebar: number): number { return panjang * lebar; }`.",
                starterCode: `function hitungLuas(panjang: number, lebar: number): number {\n  return panjang * lebar;\n}\n\nconsole.log(hitungLuas(5, 4));\n`,
                expectedOutput: "20",
                explanation: "Mantap! Fungsi bertipe berhasil menghitung luas dengan benar.",
                xpReward: 25,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_4",
      title: "04 Interface, Type Aliases, & Object-Oriented (10 Materi)",
      description: "Interface Objek, Properti Opsional (?), Type Aliases, dan Union Types.",
      lessons: [
        {
          id: "ts_l4_1",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Interface, Type Aliases, & Object-Oriented",
          title: "Interface Objek & Properti Opsional",
          description: "Mendefinisikan cetak biru objek dengan properti wajib dan opsional (?).",
          icon: "building",
          xp: 65,
          prerequisites: ["ts_l3_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Interface Objek",
              content: `Interface digunakan untuk menentukan bentuk struktur properti sebuah objek.

Contoh:
interface User {
  id: number;
  nama: string;
  isAktif?: boolean; // Properti opsional
}`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_11",
                type: "code_challenge",
                prompt: "Tuliskan interface Produk dengan properti nama bertipe string dan harga bertipe number!",
                conceptGuide: "Gunakan kata kunci `interface Produk { nama: string; harga: number; }`.",
                starterCode: `interface Produk {\n  nama: string;\n  harga: number;\n}\n\nconst laptop: Produk = { nama: "MacBook", harga: 1500 };\nconsole.log(laptop.nama);\n`,
                expectedOutput: "MacBook",
                explanation: "Luar biasa! Interface Produk bekerja dengan sangat baik.",
                xpReward: 30,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_5",
      title: "05 MASTER LEVEL: Generics & Fullstack Project (10 Materi)",
      description: "Level Master: Generics, Utility Types, CRUD Engine, dan Auth Middleware.",
      lessons: [
        {
          id: "ts_l5_1",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 MASTER LEVEL: Generics & Fullstack Project",
          title: "Konsep Generic Types",
          description: "Membuat fungsi dan interface reusable bertipe fleksibel.",
          icon: "settings",
          xp: 75,
          prerequisites: ["ts_l4_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Generics di TypeScript",
              content: `Generics membolehkan kita membuat komponen/fungsi yang bisa bekerja dengan berbagai tipe data tanpa kehilangan type safety.

Contoh:
function identitas<T>(arg: T): T {
  return arg;
}`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_12",
                type: "code_challenge",
                prompt: "Buat fungsi generic bungkusInput<T>(val: T) yang mengembalikan object { data: val }!",
                conceptGuide: "Gunakan parameter generic `<T>` pada nama fungsi `function bungkusInput<T>(val: T) { return { data: val }; }`.",
                starterCode: `function bungkusInput<T>(val: T) {\n  return { data: val };\n}\n\nconst hasil = bungkusInput("Berhasil");\nconsole.log(hasil.data);\n`,
                expectedOutput: "Berhasil",
                explanation: "Hebat! Fungsi generic kamu berhasil dibuat dan dipanggil.",
                xpReward: 35,
              },
            },
          ],
        },
        {
          id: "ts_l5_2",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 MASTER LEVEL: Generics & Fullstack Project",
          title: "Master Challenge: CRUD Data Engine",
          description: "Level Master: Membangun sistem kelola data (Tambah, Hapus, Filter) bertipe statis.",
          icon: "box",
          xp: 100,
          prerequisites: ["ts_l5_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Arsitektur CRUD Engine di TypeScript Master Level",
              content: `Di level Master, kamu tidak lagi hanya membuat variabel sederhana. Kamu akan menyusun sistem manajemen data bertipe ketat (strict types) yang mendukung:
1. Interface Data Item
2. Array Manipulations (Filter & Map)
3. Return Types & Error Guards

Mari kita bangun CRUD Engine sederhana untuk mengelola daftar User!`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_master_1",
                type: "code_challenge",
                prompt: "Level Master: Lengkapi fungsi filterUserAktif untuk memproses daftar user!",
                conceptGuide: "Di level master, buat interface `UserItem { id: number; nama: string; aktif: boolean; }` lalu gunakan method `.filter(u => u.aktif)`.",
                starterCode: `interface UserItem {
  id: number;
  nama: string;
  aktif: boolean;
}

const daftarUser: UserItem[] = [
  { id: 1, nama: "Kadez", aktif: true },
  { id: 2, nama: "Budi", aktif: false },
  { id: 3, nama: "Siti", aktif: true }
];

function filterUserAktif(users: UserItem[]): UserItem[] {
  return users.filter(u => u.aktif);
}

const userAktif = filterUserAktif(daftarUser);
console.log(userAktif.length);
`,
                expectedOutput: "2",
                explanation: "LUAR BIASA! Kamu resmi menuntaskan Tantangan Level Master CRUD Engine di TypeScript!",
                xpReward: 50,
              },
            },
          ],
        },
      ],
    },
  ],
};
