function subarrayDivision(s, d, m) {
  let count = 0;
  let currentSum = 0;

  for (let i = 0; i < m; i++) {
    currentSum += s[i];
  }

  if (currentSum === d) {
    count++;
  }

  for (let i = m; i < s.length; i++) {
    currentSum += s[i] - s[i - m];
    if (currentSum === d) {
      count++;
    }
  }

  console.log(count);
}

subarrayDivision([4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4], 15, 4);
