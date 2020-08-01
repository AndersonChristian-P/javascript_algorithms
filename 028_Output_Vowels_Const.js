// input string, output vowels and consonants to log, vowels first and then consonants, but in order

function vowelsAndConsonants(s) {

  let vowels = [];
  let consonants = [];
  let toLowerCase = s.toLowerCase();

  const print = x => {
    console.log(x)
  }

  let i;

  for (i in toLowerCase) {
    if (toLowerCase.charAt(i) === "a" ||
      toLowerCase.charAt(i) === "e" ||
      toLowerCase.charAt(i) === "i" ||
      toLowerCase.charAt(i) === "o" ||
      toLowerCase.charAt(i) === "u") {
      vowels.push(toLowerCase.charAt(i));
    } else {
      consonants.push(toLowerCase.charAt(i));
    }
  }

  vowels.forEach(print)
  consonants.forEach(print)

  // i = 0;
  // for (i in strVowels) {
  //   console.log(strVowels.charAt(i));
  // }

  // i = 0;
  // for (i in strConsonants) {
  //   console.log(strConsonants.charAt(i));
  // }

}