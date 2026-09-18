// ^ starts with
console.log(/^Hello/.test("Hello World"));

// $ ends with
console.log(/World$/.test("Hello World"));

// . any one character
console.log(/c.t/.test("cat"));

// * zero or more
console.log(/go*/.test("gooo"));

// + one or more
console.log(/go+/.test("gooo"));

// ? optional
console.log(/colou?r/.test("color"));

console.log(/colou?r/.test("colour"));
