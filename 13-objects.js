let student = {
  name: "Sanchive",
  age: 20,
  course: "JS"
};
console.log(student.name);
console.log(student["age"]);
student.city = "Delhi";
console.log(student);
student.age = 21;
console.log(student);
delete student.city;
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
