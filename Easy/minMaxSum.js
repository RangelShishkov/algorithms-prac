function minMaxSum(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let minSum = 0;
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  minSum = sum - maxNum;
  maxSum = sum - minNum;

  console.log(`${minSum} ${maxSum}`);
}
minMaxSum([1, 3, 5, 7, 9]);
