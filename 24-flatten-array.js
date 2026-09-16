function flattenArray(values) {
  return values.reduce((result, value) => {
    if (Array.isArray(value)) {
      return result.concat(flattenArray(value));
    }

    result.push(value);
    return result;
  }, []);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
console.log(flattenArray([[], [1, [2]], 3]));
