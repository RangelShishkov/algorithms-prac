function gradingStudents(grades) {
  // grade < 40 = failing
  //grade under 38 no rounding
  // grades with mulitple of 3 and higher no rounding
  // grade rounding when multiple of <= 2

  let secondNumber = "";
  let numToStr = " ";
  let roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    numToStr = grades[i].toString();
    secondNumber = numToStr.substring(1);

    if (grades[i] < 38) {
      roundedGrades.push(grades[i]);
    } else if (
      secondNumber == 1 ||
      secondNumber == 2 ||
      secondNumber == 5 ||
      secondNumber == 6 ||
      secondNumber == 7 ||
      secondNumber == 0
    ) {
      roundedGrades.push(grades[i]);
    } else if (secondNumber == 3 || secondNumber == 8) {
      grades[i] += 2;
      roundedGrades.push(grades[i]);
    } else if (secondNumber == 4 || secondNumber == 9) {
      grades[i] += 1;
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades
}
gradingStudents([73, 67, 38, 33]);
