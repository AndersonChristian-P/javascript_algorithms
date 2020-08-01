/*

Complete a getLetter(s) function. It has one parameter: a string consisting of lowercase English alphabetical letters. It must return A, B, C, or D depending on the following criteria:

If the first character in string is in the set {a, e, i, o, u}, then return A.
If the first character in string is in the set {b, c, d, f, g}, then return B.
If the first character in string is in the set {h, j, k, l, m}, then return C.
If the first character in string is in the set {n, p, q, r, s, t, v, w, x, z}, then return D.

*/


const getLetter = s => {
  let letter;

  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
    case 'bcdfg'.includes(s[0]):
      letter = 'B';
      break;
    case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
    default:
      letter = 'D';
      break;
  }

  return letter
}

console.log(getLetter('zwxya'));