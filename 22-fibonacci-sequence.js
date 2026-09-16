function fibonacci(count) {
  if (!Number.isInteger(count) || count < 0) {
    throw new RangeError("Count must be a non-negative integer");
  }

  const sequence = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < count; i++) {
    sequence.push(first);
    [first, second] = [second, first + second];
  }

  return sequence;
}

console.log(fibonacci(0));
console.log(fibonacci(10));
