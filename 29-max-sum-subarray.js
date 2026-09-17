function maxSumSubarray(numbers, windowSize) {
  if (
    !Number.isInteger(windowSize) ||
    windowSize <= 0 ||
    windowSize > numbers.length
  ) {
    throw new RangeError("Window size must be valid");
  }

  let windowSum = 0;
  for (let index = 0; index < windowSize; index++) {
    windowSum += numbers[index];
  }

  let maximumSum = windowSum;

  for (let end = windowSize; end < numbers.length; end++) {
    windowSum += numbers[end] - numbers[end - windowSize];
    maximumSum = Math.max(maximumSum, windowSum);
  }

  return maximumSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
console.log(maxSumSubarray([2, 3, 4, 1, 5], 2));
console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1], 3));
