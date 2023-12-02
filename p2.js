let input = [2, 7, 11, 15];
let total = 22;
let arr = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    sum = input[i] + input[j];
    // console.log(sum)
    if (sum == total) {
      arr.push(i, j);
    }
  }
}
console.log(arr);
