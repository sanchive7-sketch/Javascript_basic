function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function createProfile(name, ...hobbies) {
  return { name, hobbies };
}

function mergeArrays(first, second) {
  return [...first, ...second];
}

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(sum(1, 2, 3, 4));
console.log(createProfile("Asha", "reading", "coding", "music"));
console.log(mergeArrays([1, 2], [3, 4]));
console.log(greet());
console.log(greet("Ravi"));
