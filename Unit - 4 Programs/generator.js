function* students() {

    yield "Arun";
    yield "Ravi";
    yield "Priya";

}

let studentGenerator = students();

console.log(studentGenerator.next());
console.log(studentGenerator.next());
console.log(studentGenerator.next());
console.log(studentGenerator.next());
