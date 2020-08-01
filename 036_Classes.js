/*
Create a polygon class that has the following properties
- A constructor that takes an array of integer values describing the lengths of the polygon sides
- A perimeter() method that returns the polygon's perimeter
*/

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());