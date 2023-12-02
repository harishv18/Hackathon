let nums = [1,1,2]
let modified_nums = []
const set = new Set(nums)
let count = 0
for(let i of set){
  modified_nums[count] = i
  count+=1
}
console.log(modified_nums)

