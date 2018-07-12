// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
function capitalize(str) {
  const words = str.split(' ');
  let capitalizeWords = [];

  for (let word of words) {
    capitalizeWords.push(upperCaseWord(word));
  }

  return capitalizeWords.join(' ');
}

function upperCaseWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

module.exports = capitalize;
