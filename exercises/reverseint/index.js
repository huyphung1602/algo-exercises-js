// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
function reverseInt(n) {
  let addition
  if (n < 0) {
    addition = '-';
    n = -n;
  } else {
    addition = '';
  }
  var result = n.toString().split('').reduce((rev, char) => char + rev, '');
  return parseInt(addition + result);
}

module.exports = reverseInt;
