function greet(name: string): string {
    return `Hello ${name}!`;
}

const message: string = greet ("there");
console.log(message);

// 

let fullName: string = "James";
let age: number = 30;
let sentence: string = `${message} My name is ${fullName} and I'm currently ${age} years old, and I will turn ${age + 1} next year.`;

console.log(sentence);