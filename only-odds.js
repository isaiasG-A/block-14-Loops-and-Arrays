//A set of numbers will analyzed and a new set will be returned containing only the odd numbers from the first set.

//Set of numbers that will be iterated
const nums = [2, 4, 6, 8, 10, 11, 12];

//This new set will only contain odd numbers
const odds = [];


//Iteration of nums set
for(let i = 0; i < nums.length; i++) {
  //each individual number will be analyzed
  let num = nums[i];
  
  //Condition will check if a remainder exists when a number is divided by 2. If it does, then the number is an odd number
  if(num % 2 != 0) {
//Each number that does have a remainder will be added to "odds" array.
    odds.push(num);
  }
}

console.log(odds);