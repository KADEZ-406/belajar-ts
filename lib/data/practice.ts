import { PracticeChallenge } from "../types";

export const PRACTICE_CHALLENGES: PracticeChallenge[] = [
  {
    id: "ts_sum_array",
    title: "Sum of Numbers",
    language: "typescript",
    difficulty: "Easy",
    description: "Write a function `sumArray(numbers: number[]): number` that returns the total sum of all numbers in the array.",
    starterCode: `function sumArray(numbers: number[]): number {
  // Your code here
  return 0;
}

console.log(sumArray([1, 2, 3, 4]));`,
    expectedOutput: "10",
    xpReward: 15,
    hint: "Use array.reduce() or a simple for loop to accumulate the sum.",
  },
  {
    id: "ts_reverse_string",
    title: "Reverse String",
    language: "typescript",
    difficulty: "Easy",
    description: "Write a function `reverseStr(str: string): string` that returns the reversed version of the string.",
    starterCode: `function reverseStr(str: string): string {
  // Your code here
  return "";
}

console.log(reverseStr("CodeQuest"));`,
    expectedOutput: "tseuQedoC",
    xpReward: 15,
    hint: "Convert to an array with .split(''), reverse it, and .join('') back together.",
  },
  {
    id: "ts_filter_even",
    title: "Filter Even Numbers",
    language: "typescript",
    difficulty: "Medium",
    description: "Write a function `getEvens(arr: number[]): number[]` that returns only even numbers.",
    starterCode: `function getEvens(arr: number[]): number[] {
  // Your code here
  return [];
}

console.log(getEvens([1, 2, 3, 4, 5, 6]));`,
    expectedOutput: "[2, 4, 6]",
    xpReward: 25,
    hint: "Use `arr.filter(n => n % 2 === 0)`.",
  },
  {
    id: "tsx_button_component",
    title: "Interactive Counter Props",
    language: "tsx",
    difficulty: "Easy",
    description: "Create a React component interface for `CounterProps` with `count: number` and `onIncrement: () => void`.",
    starterCode: `interface CounterProps {
  count: number;
  onIncrement: () => void;
}

function Counter({ count, onIncrement }: CounterProps) {
  return <button onClick={onIncrement}>Count: {count}</button>;
}

console.log("Component Defined Successfully");`,
    expectedOutput: "Component Defined Successfully",
    xpReward: 20,
    hint: "Define explicit prop types for TypeScript React components.",
  },
  {
    id: "python_fizzbuzz",
    title: "Python FizzBuzz",
    language: "python",
    difficulty: "Easy",
    description: "Write a Python function `fizzbuzz(n)` that returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, or the number as string.",
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
    hint: "Check divisible by 15 first using modulo `%` operator.",
  },
  {
    id: "python_palindrome",
    title: "Palindrome Checker",
    language: "python",
    difficulty: "Medium",
    description: "Write a Python function `is_palindrome(s)` that checks if a string reads the same backwards.",
    starterCode: `def is_palindrome(s: str) -> bool:
    cleaned = s.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

print(is_palindrome("racecar"))
print(is_palindrome("codequest"))`,
    expectedOutput: `True
False`,
    xpReward: 25,
    hint: "Use Python string slicing `s[::-1]` to reverse a string.",
  },
];
