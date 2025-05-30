function bonAppetit(bill, k, b) {
  const didNotEat = k;
  const charged = b;

  let annaSum = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== didNotEat) {
      annaSum += bill[i];
    }
  }

  let costPerPerson = annaSum / 2;
  let overCharged = b - costPerPerson;

  if (overCharged > 0) {
    console.log(overCharged);
  } else if (overCharged <= 0) {
    console.log("Bon Appetit");
  }
}
