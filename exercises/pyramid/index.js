// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
function pyramid(n) {
  const array = Array(n+n-1).fill(' ');
  const mid = n-1;

  for (let i = 0; i <= mid; i++) {
    array[mid-i] = '#';
    array[mid+i] = '#';
    console.log(array.join(''));
  }
}

module.exports = pyramid;
