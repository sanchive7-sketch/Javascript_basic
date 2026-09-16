try {
  let x = y + 1;
} catch (err) {
  console.log(err.message);
} finally {
  console.log("Done");
}
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (err) {
  console.log(err.message);
}
console.log(divide(10, 2));
