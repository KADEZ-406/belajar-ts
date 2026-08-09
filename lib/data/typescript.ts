import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript (Lengkap & Bertahap)",
  description: "Dari dasar variabel, tipe primitif, array, fungsi, interface, hingga level Master arsitektur CRUD dan Auth Middleware.",
  icon: "book-open",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Fondasi Utama & Sintaks Dasar",
      description: "Pahami tipe data primitif, anotasi variabel, dan cara kerja TypeScript dari nol.",
      lessons: [
        {
          id: "ts_l1_1",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Pengenalan TypeScript",
          description: "Mengapa TypeScript digunakan developer dunia dan cara kerja tipe statis.",
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
          title: "Tipe Primitif: String, Number, & Boolean",
          description: "Menentukan jenis data teks, angka, dan logika logika pada variabel.",
          icon: "tag",
          xp: 40,
          prerequisites: ["ts_l1_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Tipe Data Primitif",
              content: `Di TypeScript, ada 3 tipe data primitif paling utama:
1. \`string\`: Untuk teks (contoh: "Budi")
2. \`number\`: Untuk angka bulat & desimal (contoh: 25, 3.14)
3. \`boolean\`: Untuk nilai logika (true atau false)`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_3",
                type: "code_completion",
                prompt: "Lengkapi tipe data untuk variabel umur berikut!",
                conceptGuide: "Variabel angka menggunakan anotasi tipe `number`.",
                template: "let umur: ___ = 25;",
                options: ["number", "string", "boolean", "int"],
                correctAnswer: "number",
                explanation: "Tepat sekali! Angka didefinisikan dengan tipe `number`.",
                xpReward: 15,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_4",
                type: "fix_code",
                prompt: "Perbaiki eror pada kode di bawah ini!",
                conceptGuide: "Variabel bertipe number tidak boleh diberi nilai berkutip seperti '25'.",
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
          id: "ts_l1_3",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Fondasi Utama & Sintaks Dasar",
          title: "Deklarasi Variabel (let vs const) & Inference",
          description: "Memahami kapan memakai let/const dan fitur kemudahan Type Inference.",
          icon: "settings",
          xp: 45,
          prerequisites: ["ts_l1_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "let vs const & Type Inference",
              content: `Gunakan \`const\` untuk variabel yang nilainya tidak pernah diubah, dan \`let\` jika nilainya bisa berubah.

TypeScript juga memiliki fitur **Type Inference**, yaitu kemampuan menebak tipe data secara otomatis tanpa perlu ditulis manual jika langsung diberi nilai awal.`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_5",
                type: "predict_output",
                prompt: "Apa hasil keluaran dari penggabungan string berikut?",
                conceptGuide: "Operator `+` pada string akan menggabungkan teks.",
                code: `let nama: string = "Kadez";\nconsole.log("Halo " + nama);`,
                options: ["Halo Kadez", "HaloKadez", "Error", "undefined"],
                correctAnswer: "Halo Kadez",
                explanation: "Bener banget! Teks digabungkan dengan rapi.",
                xpReward: 15,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_2",
      title: "02 Struktur Data & Logika Kontrol",
      description: "Array bertipe, Tuple, Percabangan, dan Penulisan Fungsi.",
      lessons: [
        {
          id: "ts_l2_1",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Struktur Data & Logika Kontrol",
          title: "Array Bertipe & Manipulasi",
          description: "Membuat larik data bertipe homogen dan melakukan manipulasi data.",
          icon: "box",
          xp: 50,
          prerequisites: ["ts_l1_3"],
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
                id: "ts_ex_6",
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
          sectionTitle: "02 Struktur Data & Logika Kontrol",
          title: "Function Signatures & Return Types",
          description: "Menentukan tipe data parameter dan nilai kembalian (return value) fungsi.",
          icon: "zap",
          xp: 55,
          prerequisites: ["ts_l2_1"],
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
                id: "ts_ex_7",
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
      id: "ts_sec_3",
      title: "03 Type System & Object-Oriented",
      description: "Interface Objek, Type Aliases, Union Types, dan Type Narrowing.",
      lessons: [
        {
          id: "ts_l3_1",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Type System & Object-Oriented",
          title: "Interface Objek & Properti Opsional",
          description: "Mendefinisikan cetak biru objek dengan properti wajib dan opsional (?).",
          icon: "building",
          xp: 60,
          prerequisites: ["ts_l2_2"],
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
                id: "ts_ex_8",
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
      id: "ts_sec_4",
      title: "04 Generics & Async Programming",
      description: "Fungsi generic fleksibel, Utility Types, dan Async/Await bertipe.",
      lessons: [
        {
          id: "ts_l4_1",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 Generics & Async Programming",
          title: "Konsep Generic Types",
          description: "Membuat fungsi dan interface reusable bertipe fleksibel.",
          icon: "settings",
          xp: 75,
          prerequisites: ["ts_l3_1"],
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
                id: "ts_ex_9",
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
      ],
    },
    {
      id: "ts_sec_5",
      title: "05 MASTER LEVEL: Projek Fullstack & State Management",
      description: "Level Master: Menulis kode kompleks, CRUD Engine, dan Auth Middleware.",
      lessons: [
        {
          id: "ts_l5_1",
          language: "typescript",
          sectionId: "ts_sec_5",
          sectionTitle: "05 MASTER LEVEL: Projek Fullstack & State Management",
          title: "Master Challenge: CRUD Data Engine",
          description: "Level Master: Membangun sistem kelola data (Tambah, Hapus, Filter) bertipe statis.",
          icon: "box",
          xp: 100,
          prerequisites: ["ts_l4_1"],
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
