function minimumSizeSubarray(numbers, target) {
  let start = 0;
  let windowSum = 0;
  let minimumLength = Infinity;

  for (let end = 0; end < numbers.length; end++) {
    windowSum += numbers[end];

    while (windowSum >= target) {
      minimumLength = Math.min(minimumLength, end - start + 1);
      windowSum -= numbers[start];
      start += 1;
    }
  }

  return minimumLength === Infinity ? 0 : minimumLength;
}

console.log(minimumSizeSubarray([2, 3, 1, 2, 4, 3], 7));
console.log(minimumSizeSubarray([1, 2, 3, 4, 5], 15));
console.log(minimumSizeSubarray([1, 2, 3], 10));
