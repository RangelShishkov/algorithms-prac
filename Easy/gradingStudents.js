function gradingStudents(grades) {
  // grade < 40 = failing
  //grade under 38 no rounding
  // grades with mulitple of 3 and higher no rounding
  // grade rounding when multiple of <= 2

  let roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      roundedGrades.push(grades[i]);
    } else if (grades[i] % 5 == 4) {
      grades[i] += 1;
      roundedGrades.push(grades[i]);
    } else if (grades[i] % 5 == 3) {
      grades[i] += 2;
      roundedGrades.push(grades[i]);
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}
gradingStudents([73, 67, 38, 33]);
