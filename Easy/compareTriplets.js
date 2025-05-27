function compareTriplets(a, b) {
  let bobPoints = 0;
  let alicePoints = 0;
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints += 1;
    } else if (a[i] < b[i]) {
      bobPoints += 1;
    }
  }
  newArr.push(alicePoints);
  newArr.push(bobPoints);
  console.log(newArr);
}

compareTriplets([5, 6, 7], [3, 6, 10]);
