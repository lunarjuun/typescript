// String
let greeting: string = "Hello, TypeScript!";

// Number
const userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
type Scores = Readonly<number[]>;
let scores: Scores = [100, 95, 98];
// const scores: Scores = [100, 95, 98];
// let scores: number[] = [100, 95, 98];
// const scores: number[] = [100, 95, 98];

console.log(greeting);
console.log(userCount);
console.log(isLoading);
console.log(scores);

scores.push(1)
scores.push(2)
scores.push(3)

scores = [1, 2, 3]

console.log(scores)
