function twoSum(numbers, target) {
  const seen = new Map();

  for (let index = 0; index < numbers.length; index++) {
    const complement = target - numbers[index];

    if (seen.has(complement)) {
      return [seen.get(complement), index];
    }

    seen.set(numbers[index], index);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 2, 3], 10));
