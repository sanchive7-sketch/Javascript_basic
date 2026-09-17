function longestUniqueSubstring(value) {
  const lastIndex = new Map();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < value.length; end++) {
    const character = value[end];

    if (lastIndex.has(character) && lastIndex.get(character) >= start) {
      start = lastIndex.get(character) + 1;
    }

    lastIndex.set(character, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));
console.log(longestUniqueSubstring("bbbbb"));
console.log(longestUniqueSubstring("pwwkew"));
console.log(longestUniqueSubstring(""));
