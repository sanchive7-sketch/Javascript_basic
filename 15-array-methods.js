let nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 2));
console.log(nums.filter(n => n % 2 === 0));
console.log(nums.reduce((s, n) => s + n, 0));
console.log(nums.find(n => n > 3));
console.log(nums.forEach(n => console.log(n)));
console.log(nums.some(n => n > 4));
console.log(nums.every(n => n > 0));
console.log(nums.sort((a, b) => b - a));
