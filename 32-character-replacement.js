function characterReplacement(value, replacements) {
  const frequencies = new Map();
  let start = 0;
  let maxLength = 0;
  let highestFrequency = 0;

  for (let end = 0; end < value.length; end++) {
    const character = value[end];
    const frequency = (frequencies.get(character) || 0) + 1;
    frequencies.set(character, frequency);
    highestFrequency = Math.max(highestFrequency, frequency);

    while (end - start + 1 - highestFrequency > replacements) {
      const startingCharacter = value[start];
      frequencies.set(
        startingCharacter,
        frequencies.get(startingCharacter) - 1,
      );
      start += 1;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("AAAB", 0));
