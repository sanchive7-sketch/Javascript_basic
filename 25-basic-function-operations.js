function add(first, second) {
  return first + second;
}

function isEven(number) {
  return number % 2 === 0;
}

function findMaximum(numbers) {
  let maximum = numbers[0];

  for (const number of numbers) {
    if (number > maximum) {
      maximum = number;
    }
  }

  return maximum;
}

function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

console.log(add(8, 5));
console.log(isEven(12));
console.log(isEven(7));
console.log(findMaximum([4, 9, 2, 7]));
console.log(calculateSimpleInterest(1000, 5, 2));
