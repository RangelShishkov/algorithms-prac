function birthdayCake(candles) {
  let numOfCandles = candles.length;
  let highestCandle = 0;
  let highestCandleCount = 0;

  for (let i = 0; i < numOfCandles; i++) {
    if (candles[i] > highestCandle) {
      highestCandle = candles[i];
      highestCandleCount = 0;
      highestCandleCount++;
    } else if (candles[i] == highestCandle) {
      highestCandleCount++;
    }
  }

  return highestCandleCount
}
birthdayCake([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]);
