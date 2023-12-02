
function len_of_two() {
  let nums = [0,1]
  let output = []
  let a = nums[0]
  let b = nums[1]
  total = nums.length * 2
  for(let i=0;i<nums.length/2;i++){
    temp = a;
    a = b;
    b = temp;
    output.push([b,a]);
    temp = a;
    a = b;
    b = temp;
    output.push([b, a]);
  }
  return output
}

function len_of_three() {
  let nums = [1, 2, 3];

  let output = [];

  let a = nums[0];
  let b = nums[1];
  let c = nums[2];

  total = nums.length * 2;

  for (let i = 0; i < total / 2; i++) {
    temp = a;
    a = b;
    b = c;
    c = temp;
    output.push([a, b, c]);
    temp = a;
    a = b;
    b = c;
    c = temp;
    output.push([c, b, a]);
  }

  console.log(output);
}

// len_of_three();
console.log(len_of_two())