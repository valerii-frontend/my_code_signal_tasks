function rotateImage(a) {
  const len = a.length;
  const itemLen = a[0].length;
  let result = Array.from({ length: len }, () => new Array(itemLen));

  for (let x = 0, i = len - 1; x < itemLen; x++, i--) {
    for (let y = 0; y < len; y++) {
      result[y][x] = a[i][y];
    }
  }

  return result;
}
// test case
const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(a);
/*
[ 1, 2, 3 ]
[ 4, 5, 6 ]
[ 7, 8, 9 ]
*/
console.log(rotateImage(a));
/*
[ 7, 4, 1 ]
[ 8, 5, 2 ]
[ 9, 6, 3 ]
*/
