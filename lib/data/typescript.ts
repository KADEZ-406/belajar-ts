import { LearningPath } from "../types";

export const TYPESCRIPT_PATH: LearningPath = {
  language: "typescript",
  title: "Keahlian TypeScript",
  description: "Dari dasar variabel, interface, generics, hingga level Master membangun arsitektur CRUD dan Auth Middleware.",
  icon: "book-open",
  sections: [
    {
      id: "ts_sec_1",
      title: "01 Dasar dan Persiapan",
      description: "Pahami kenapa TypeScript dipake dev seluruh dunia dan cara nulis variabel bertipe.",
      lessons: [
        {
          id: "ts_lesson_1",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar dan Persiapan",
          title: "Pengenalan TypeScript",
          description: "Pahami konsep tipe data statis dan tulis kode TypeScript pertama kamu.",
          icon: "rocket",
          xp: 45,
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
                type: "multiple_choice",
                prompt: "Extension file yang digunakan untuk menulis kode TypeScript adalah?",
                conceptGuide: "File TypeScript standar menggunakan ekstensi `.ts`. Jika berisi komponen JSX React, kita pakai `.tsx`.",
                options: [".ts", ".js", ".py", ".html"],
                correctAnswer: 0,
                explanation: "Jawaban kamu bener banget! `.ts` adalah ekstensi resmi file TypeScript.",
                xpReward: 15,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "ts_ex_3",
                type: "code_challenge",
                prompt: "Coba tulis perintah console.log untuk mencetak kalimat 'Halo TypeScript!'",
                conceptGuide: "Di TypeScript, perintah `console.log(\"Teks Kamu\");` digunakan untuk mencetak teks ke layar konsol.",
                starterCode: `// Tulis kode kamu di bawah ini\n`,
                expectedOutput: "Halo TypeScript!",
                explanation: "Keren! Kamu berhasil mencetak pesan pertama kamu di TypeScript.",
                xpReward: 20,
              },
            },
          ],
        },
        {
          id: "ts_lesson_2",
          language: "typescript",
          sectionId: "ts_sec_1",
          sectionTitle: "01 Dasar dan Persiapan",
          title: "Tipe Primitif dan Anotasi",
          description: "Belajar cara menentukan tipe string, number, dan boolean pada variabel.",
          icon: "tag",
          xp: 50,
          prerequisites: ["ts_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Anotasi Tipe Data (Type Annotations)",
              content: `Di TypeScript, kita bisa menentukan tipe data variabel pakai tanda titik dua (:).

Contoh:
let umur: number = 20;
let nama: string = "Budi";
let isAktif: boolean = true;`,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "ts_ex_4",
                type: "code_completion",
                prompt: "Lengkapi kode berikut agar variabel umur memiliki anotasi tipe data number!",
                conceptGuide: "Anotasi tipe angka di TypeScript menggunakan kata kunci `number` setelah titik dua.",
                template: "let umur: ___ = 25;",
                options: ["number", "string", "int", "float"],
                correctAnswer: "number",
                explanation: "Mantap! `number` mencakup angka bulat maupun desimal.",
                xpReward: 15,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "ts_ex_6",
                type: "fix_code",
                prompt: "Perbaiki kode di bawah ini karena terdapat eror tipe data!",
                conceptGuide: "Variabel `harga: number` tidak boleh diberi nilai teks berkutip seperti `\"25\"`.",
                buggyCode: `let harga: number = "25";\nconsole.log(harga);`,
                correctCode: `let harga: number = 25;\nconsole.log(harga);`,
                hint: "Hapus tanda kutip ganda pada angka 25",
                explanation: "Super! Angka tidak membutuhkan tanda kutip.",
                xpReward: 20,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_2",
      title: "02 Interface dan Tipe Objek",
      description: "Mendefinisikan bentuk objek dan struktur data yang rapi dan aman.",
      lessons: [
        {
          id: "ts_lesson_3",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Interface dan Tipe Objek",
          title: "Konsep Interface Objek",
          description: "Membuat cetak biru (blueprint) untuk struktur objek.",
          icon: "building",
          xp: 60,
          prerequisites: ["ts_lesson_2"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Interface Objek",
              content: `Interface digunakan untuk menentukan struktur properti dari sebuah objek.

Contoh:
interface User {
  id: number;
  nama: string;
  isAktif?: boolean;
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
                starterCode: `// Tulis kode interface di bawah ini\ninterface Produk {\n  nama: string;\n  harga: number;\n}\n\nconst laptop: Produk = { nama: "MacBook", harga: 1500 };\nconsole.log(laptop.nama);\n`,
                expectedOutput: "MacBook",
                explanation: "Luar biasa! Interface Produk bekerja dengan sangat baik.",
                xpReward: 30,
              },
            },
          ],
        },
        {
          id: "ts_lesson_4",
          language: "typescript",
          sectionId: "ts_sec_2",
          sectionTitle: "02 Interface dan Tipe Objek",
          title: "Union & Literal Types",
          description: "Menggabungkan beberapa tipe data spesifik dalam satu variabel.",
          icon: "zap",
          xp: 65,
          prerequisites: ["ts_lesson_3"],
          steps: [
            {
              id: "step_1",
              type: "exercise",
              exercise: {
                id: "ts_ex_9",
                type: "code_completion",
                prompt: "Lengkapi tipe data Union untuk variabel nilai yang bisa bertipe string atau number!",
                conceptGuide: "Operator garis tegak `|` digunakan untuk menentukan tipe Union di TypeScript.",
                template: "let nilai: string ___ number = 100;",
                options: ["|", "&", "or", "||"],
                correctAnswer: "|",
                explanation: "Tepat sekali! Tanda `|` melambangkan tipe Union.",
                xpReward: 20,
              },
            },
          ],
        },
      ],
    },
    {
      id: "ts_sec_3",
      title: "03 Generics dan Type Narrowing",
      description: "Tingkat Menengah: Membuat fungsi reusable bergenerik dan fleksibel.",
      lessons: [
        {
          id: "ts_lesson_5",
          language: "typescript",
          sectionId: "ts_sec_3",
          sectionTitle: "03 Generics dan Type Narrowing",
          title: "Konsep Generics Types",
          description: "Membuat fungsi dan interface dinamis bertipe fleksibel.",
          icon: "settings",
          xp: 75,
          prerequisites: ["ts_lesson_4"],
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
                id: "ts_ex_10",
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
      id: "ts_sec_4",
      title: "04 MASTER LEVEL: Projek Fullstack & State Management",
      description: "Level Master: Menulis kode kompleks, CRUD Engine, dan Auth Middleware.",
      lessons: [
        {
          id: "ts_lesson_6",
          language: "typescript",
          sectionId: "ts_sec_4",
          sectionTitle: "04 MASTER LEVEL: Projek Fullstack & State Management",
          title: "Master Challenge: CRUD Data Engine",
          description: "Level Master: Membangun sistem kelola data (Tambah, Hapus, Filter) bertipe statis.",
          icon: "box",
          xp: 100,
          prerequisites: ["ts_lesson_5"],
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
                prompt: "Level Master: Lengkapi fungsi tambahUser dan filterUserAktif untuk memproses daftar user!",
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
