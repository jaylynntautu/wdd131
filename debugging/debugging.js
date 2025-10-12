// debugging.js

const PI = 3.14;
let area = 0;

// Function to calculate the area of a circle
function circleArea(radius) {
  const area = radius * radius * PI; // radius squared × PI
  return area; // return the calculated area
}

// Call the function for radius 3
area = circleArea(3);
console.log("Area1:", area);

// Call the function for radius 4
area = circleArea(4);
console.log("Area2:", area);
