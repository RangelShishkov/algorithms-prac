function timeConversion(s) {
  let aMpM = s.substring(8);

  let fullTime = s.substring(0, 8);

  let times = fullTime.split(":");

  if (aMpM === "PM") {
    if (times[0] !== "12") {
      times[0] = Number(times[0]) + 12;
    }
  } else {
    if (times[0] === "12") {
      times[0] = "00";
    }
  }

  console.log(times.join(":"));
}
timeConversion("01:45:54AM");
