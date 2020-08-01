/*
Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2 * (a+b)
area: This value is equal to a*b
Note: The names of the object's properties must be spelled correctly to pass this challenge.

 */
function Rectangle(a, b) {
  const recObj = {}
  recObj.length = a
  recObj.width = b
  recObj.perimeter = 2 * (a + b)
  recObj.area = a * b
  return recObj
}

console.log(Rectangle(6, 2))