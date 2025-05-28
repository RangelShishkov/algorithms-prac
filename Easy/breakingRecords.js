function breakingRecords(scores) {
  const numOfGames = scores.length;

  let bestRecord = scores[0];
  let worstRecord = scores[0];
  let brokeMostPoints = 0;
  let brokeWorstPoints = 0;

  const pointsArr = [];

  for (let i = 0; i < numOfGames; i++) {
    if (scores[i] > bestRecord) {
      bestRecord = scores[i];
      brokeMostPoints++;
    } else if (scores[i] < worstRecord) {
      worstRecord = scores[i];
      brokeWorstPoints++;
    }
  }

  pointsArr.push(brokeMostPoints);
  pointsArr.push(brokeWorstPoints);

  return pointsArr
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
