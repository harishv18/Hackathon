let input = [1, 2, 4, 5];
let total_length = input.length + 1;
let total_number = (total_length * (total_length + 1)) / 2;

let sum = 0;

input.forEach((element) => {
  sum += element;
});
console.log(total_number - sum);
