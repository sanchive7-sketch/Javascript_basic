// Synchronous
console.log("Task 1");

console.log("Task 2");

console.log("Task 3");

console.log("----- Asynchronous -----");

// Asynchronous
console.log("Start");

setTimeout(() => {
    console.log("Data received from server");
}, 2000);

console.log("End");
