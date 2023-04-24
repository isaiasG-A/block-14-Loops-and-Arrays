

//Numbers from 1 to 100 will be analzyed.
for(let i = 1; i <= 100; i++) {
  //If a number happens to be a multiple of 3, the word "Fizz" should be printed,
  if(i % 3 === 0) {
    console.log("Fizz");

    // If a number is divisible by 5, then word "Buzz" should be printed.
  } else if(i % 5 === 0) {
    console.log("Buzz");

    //If a number is a multiple of both 3 and 5 then the word "FizzBuzz" should be printed
  } else if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

    //If a number is not a multiple of both 3 and 5 then the number itself should be printed.
  } else {
    console.log(i);
  }
}