// Regex literal
let pattern1 = /JavaScript/;

// RegExp constructor
let pattern2 = new RegExp("JavaScript");

let text = "I am learning JavaScript";

console.log(pattern1.test(text));
console.log(pattern2.test(text));

// Character classes

console.log(/[abc]/.test("apple"));

console.log(/[0-9]/.test("Room 25"));

console.log(/[a-z]/.test("hello"));

console.log(/[A-Z]/.test("HELLO"));
