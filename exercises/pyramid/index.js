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

// // Solution 1
// function pyramid(n) {
//   const array = Array(n+n-1).fill(' ');
//   const mid = n-1;

//   for (let i = 0; i <= mid; i++) {
//     array[mid-i] = '#';
//     array[mid+i] = '#';
//     console.log(array.join(''));
//   }
// }

// // Solution 2
// function pyramid(n) {
//   const mid = Math.floor((2*n-1)/2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2*n-1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

// Solution 3
function pyramid(n, row = 0, level = '') {
  const mid = Math.floor((2*n-1)/2);

  if (row === n) {
    return;
  }

  if (2*n-1 === level.length) {
    console.log(level);
    return pyramid(n, row+1);
  }

  if (level.length >= mid - row && level.length <= mid + row) {
    level += '#';
  } else {
    level += ' ';
  }

  return pyramid(n, row, level);
}

module.exports = pyramid;
