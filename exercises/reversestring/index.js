// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//   const array = str.split('');
//   result = ''
//   for (let index = array.length - 1; index >= 0; index--) {
//     const element = array[index];
//     result += element;
//   }
//   return result
// }

// Solution 2
function reverse(str) {
  let reversed = '';
  for( let character of str) {
    reversed = character + reversed;
  }
  return reversed
}

module.exports = reverse;
