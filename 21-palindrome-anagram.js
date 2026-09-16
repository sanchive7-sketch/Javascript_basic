function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isPalindrome(value) {
  const normalized = normalize(value);
  return normalized === normalized.split("").reverse().join("");
}

function isAnagram(first, second) {
  const sortLetters = (value) => normalize(value).split("").sort().join("");
  return sortLetters(first) === sortLetters(second);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("interview"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
