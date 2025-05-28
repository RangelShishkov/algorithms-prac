function staircase(size) {
  let space = " ";
  let symbol = "#";
  for (let i = 1; i < size; i++) {
    console.log(`${space.repeat(size - i )}${symbol.repeat(i)}`);
  }
}
staircase(6);
