let nums = [1,2,3]

let output = []

let a = nums[0]
let b = nums[1]
let c = nums[2]

total = nums.length * 2

for(let i=0;i<total/2;i++){
  temp = a
  a = b
  b = c
  c = temp
  output.push([a,b,c])
  temp = a
  a = b
  b = c
  c = temp
  output.push([c,b,a])
}

console.log(output)