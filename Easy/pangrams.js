function pangrams(s) {
    const normalized = s.toLowerCase();

    const uniqueLetters = new Set();

    for (let char of normalized) {
      if (char >= "a" && char <= "z") {
        uniqueLetters.add(char);
      }
    }

    if (uniqueLetters.size === 26) {
      return "pangram";
    } else {
      return "not pangram";
    }
  }
console.log(pangrams("banana"));
