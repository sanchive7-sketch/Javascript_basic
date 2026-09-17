function createCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    value() {
      return count;
    },
  };
}

function factorial(number) {
  if (number < 0) {
    throw new RangeError("Factorial is not defined for negative numbers");
  }

  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

function rangeSum(number) {
  if (number === 0) {
    return 0;
  }

  return number + rangeSum(number - 1);
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.value());
console.log(factorial(5));
console.log(rangeSum(10));
