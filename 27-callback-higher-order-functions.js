function operate(first, second, operation) {
  return operation(first, second);
}

function multiply(first, second) {
  return first * second;
}

function processName(name, formatter) {
  return formatter(name);
}

function applyFunctions(value, functions) {
  const results = [];

  for (const fn of functions) {
    results.push(fn(value));
  }

  return results;
}

console.log(operate(6, 4, multiply));
console.log(operate(10, 3, (first, second) => first - second));
console.log(processName("javascript", (value) => value.toUpperCase()));
console.log(applyFunctions(5, [
  (value) => value * 2,
  (value) => value + 10,
  (value) => value ** 2,
]));
