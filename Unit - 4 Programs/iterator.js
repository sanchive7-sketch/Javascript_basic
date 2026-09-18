let students = ["Arun", "Ravi", "Priya"];

let iterator = students[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log("----- for...of -----");

for (let student of students) {

    console.log(student);

}
