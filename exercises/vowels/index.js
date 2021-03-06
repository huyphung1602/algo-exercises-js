// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
function vowels(str) {
  const regExp = /[aeoui]/gi;
  const vowelsStr = str.match(regExp);
  return vowelsStr ? vowelsStr.length : 0;
}

// // Solution 2
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'u', 'i', 'o'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

module.exports = vowels;
