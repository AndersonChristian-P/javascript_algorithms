/* Directions
If the number of occurrences in the string for "John" and "Mary" are equal console.log 'True' otherwise console.log 'False'
*/


const johnMary = str => {

  let countMary = (str.match(/mary/ig)).length

  let countJohn = (str.match(/john/ig)).length

  if (countMary === countJohn) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(johnMary("John&Mary&MaryJOHN"));