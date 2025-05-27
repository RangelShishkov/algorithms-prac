function plusMinus(arr) {
  const sizeOfArr = arr.length;

  let positiveNums = 0;
  let negativeNums = 0;
  let zeroValues = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNums += 1;
    } else if (arr[i] < 0) {
      negativeNums += 1;
    } else {
      zeroValues += 1;
    }
  }

  let positiveRatio = positiveNums / sizeOfArr;
  let negativeRatio = negativeNums / sizeOfArr;
  let zeroRatio = zeroValues / sizeOfArr;

  console.log(
    `${positiveRatio.toFixed(6)}\n${negativeRatio.toFixed(
      6
    )}\n${zeroRatio.toFixed(6)}`
  );
}
plusMinus([-4, 3, -9, 0, 4, 1]);
