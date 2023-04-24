//A set of numbers will analyzed and a new set will be returned containing only the odd numbers from the first set.

const nums = [2, 4, 6, 8, 10, 11, 12];
const odds = [];


for(let i = 0; i < nums.length; i++) {
  let num = nums[i];
  if(num % 2 != 0) {
    odds.push(num);
  }
}

console.log(odds);