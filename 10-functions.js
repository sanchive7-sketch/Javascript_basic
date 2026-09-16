function greet() {
  console.log("Hello!");
}
greet();
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
function greetUser(name = "Guest") {
  return "Hello " + name;
}
console.log(greetUser());
console.log(greetUser("Ram"));
