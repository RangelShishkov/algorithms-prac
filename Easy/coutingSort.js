function countingSort(arr) {
  let frequencyArr = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i]]++;
  }
  return frequencyArr;
}
countingSort([1, 1, 3, 2, 1]);
