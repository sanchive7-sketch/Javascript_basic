let arr = [10, 20, 30];
for (let v of arr) {
  console.log(v);
}
let obj = { a: 1, b: 2 };
for (let k in obj) {
  console.log(k + " " + obj[k]);
}
for (let i in arr) {
  console.log(i + " " + arr[i]);
}
let str = "JS";
for (let ch of str) {
  console.log(ch);
}
