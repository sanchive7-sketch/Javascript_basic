let pattern = /JavaScript/i;

let text = "I am learning JavaScript";

// test()
console.log("test():", pattern.test(text));

// exec()
let result = pattern.exec(text);

console.log("exec():", result[0]);

console.log("Index:", result.index);
