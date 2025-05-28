function diagonalDifference(arr) {
  let rows = arr.length;
  let absoluteSum = 0;

  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < rows; i++) {
    firstDiagonal += arr[i][i];
  }

  for (let n = 0; n < rows; n++) {
    secondDiagonal += arr[n][cols - n - 1];
  }

  console.log(firstDiagonal);
  console.log(secondDiagonal);

  absoluteSum = firstDiagonal - secondDiagonal;
  return Math.abs(absoluteSum);
}
diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
