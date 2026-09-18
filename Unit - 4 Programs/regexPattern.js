// {n} - exactly n times
console.log(/a{3}/.test("aaa"));

// {n,} - n or more
console.log(/a{2,}/.test("aaaa"));

// {n,m} - minimum n, maximum m
console.log(/a{2,4}/.test("aaa"));

// i - ignore case
console.log(/javascript/i.test("JavaScript"));

// g - global
let text = "Java Java Java";

console.log(text.match(/Java/g));

// m - multiline
let data = `JavaScript
JavaScript`;

console.log(/^JavaScript$/gm.test(data));
