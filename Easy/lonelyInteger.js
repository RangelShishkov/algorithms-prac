function lonelyinteger(a) {
  let lonelyInteger = 0;
  for (let num of a) {
    lonelyInteger ^= num;
  }
  console.log(lonelyInteger);
}
lonelyinteger([1, 2, 2, 4, 6, 6, 1]);
