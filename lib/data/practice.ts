import { PracticeChallenge } from "../types";

export const PRACTICE_CHALLENGES: PracticeChallenge[] = [
  {
    id: "ts_sum_array",
    title: "Jumlahkan Deret Angka",
    language: "typescript",
    difficulty: "Easy",
    description: "Buat fungsi sumArray(numbers: number[]): number yang mengembalikan hasil penjumlahan seluruh angka dalam array.",
    starterCode: `function sumArray(numbers: number[]): number {
  // Tulis kode kamu di sini
  return 0;
}

console.log(sumArray([1, 2, 3, 4]));`,
    expectedOutput: "10",
    xpReward: 15,
    hint: "Gunakan array.reduce() atau perulangan for untuk menjumlahkan nilai.",
  },
  {
    id: "ts_reverse_string",
    title: "Balikkan Teks",
    language: "typescript",
    difficulty: "Easy",
    description: "Buat fungsi reverseStr(str: string): string yang mengembalikan teks dalam urutan terbalik.",
    starterCode: `function reverseStr(str: string): string {
  // Tulis kode kamu di sini
  return "";
}

console.log(reverseStr("CodeQuest"));`,
    expectedOutput: "tseuQedoC",
    xpReward: 15,
    hint: "Ubah teks menjadi array dengan .split(''), balikkan dengan .reverse(), lalu gabungkan dengan .join('').",
  },
  {
    id: "ts_filter_even",
    title: "Filter Angka Genap",
    language: "typescript",
    difficulty: "Medium",
    description: "Buat fungsi getEvens(arr: number[]): number[] yang hanya mengembalikan angka genap.",
    starterCode: `function getEvens(arr: number[]): number[] {
  // Tulis kode kamu di sini
  return [];
}

console.log(getEvens([1, 2, 3, 4, 5, 6]));`,
    expectedOutput: "[2, 4, 6]",
    xpReward: 25,
    hint: "Gunakan arr.filter(n => n % 2 === 0).",
  },
  {
    id: "tsx_button_component",
    title: "Props Komponen Counter",
    language: "tsx",
    difficulty: "Easy",
    description: "Buat tipe antarmuka React CounterProps dengan count: number dan onIncrement: () => void.",
    starterCode: `interface CounterProps {
  count: number;
  onIncrement: () => void;
}

function Counter({ count, onIncrement }: CounterProps) {
  return <button onClick={onIncrement}>Hitungan: {count}</button>;
}

console.log("Komponen Berhasil Didefinisikan");`,
    expectedOutput: "Komponen Berhasil Didefinisikan",
    xpReward: 20,
    hint: "Definisikan tipe props yang jelas untuk komponen React TypeScript.",
  },
  {
    id: "python_fizzbuzz",
    title: "Python FizzBuzz",
    language: "python",
    difficulty: "Easy",
    description: "Buat fungsi Python fizzbuzz(n) yang mengembalikan 'Fizz' untuk kelipatan 3, 'Buzz' untuk kelipatan 5, 'FizzBuzz' untuk keduanya, atau angka dalam bentuk string.",
    starterCode: `def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    return str(n)

print(fizzbuzz(15))
print(fizzbuzz(9))
print(fizzbuzz(10))`,
    expectedOutput: `FizzBuzz
Fizz
Buzz`,
    xpReward: 20,
    hint: "Periksa keterbagian dengan angka 15 terlebih dahulu menggunakan operator modulo %.",
  },
  {
    id: "python_palindrome",
    title: "Cek Kata Palindrom",
    language: "python",
    difficulty: "Medium",
    description: "Buat fungsi Python is_palindrome(s) untuk memeriksa apakah teks dibaca sama dari depan maupun belakang.",
    starterCode: `def is_palindrome(s: str) -> bool:
    cleaned = s.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

print(is_palindrome("katak"))
print(is_palindrome("codequest"))`,
    expectedOutput: `True
False`,
    xpReward: 25,
    hint: "Gunakan pemotongan string Python s[::-1] untuk membalikkan string.",
  },
];
