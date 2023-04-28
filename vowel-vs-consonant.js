//Word that needs to be analyzed
const word = "textbook"

//Array of vowels 
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
let consonantCount = 0;

for(let i = 0; i < word.length; i++) {
  let letter = word[i];

//A string of lowercase letters should be analyze to see how many consonants and how many vowels it has.
  //console.log("inclues()", vowels.includes(letter))
  if(vowels.includes(letter)) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}


// The string should  be printed alongside the number of consonants and vowels.
console.log(`${word} has ${consonantCount} consonants and ${vowelCount} vowels`)