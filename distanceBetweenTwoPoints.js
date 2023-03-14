//? Distance between two points using arrow function

const distance = (startDistance, endDistance) =>
  +Math.sqrt(
    Math.pow(endDistance.x - startDistance.x, 2) +
      Math.pow(endDistance.y - startDistance.y, 2)
  ).toFixed(2);

console.log(distance({ x: 2, y: 2 }, { x: 11, y: 8 }));
