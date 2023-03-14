//? Distance between two points using arrow function

const distance = (start, end) =>
  +Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  ).toFixed(2);

console.log(distance({ x: 2, y: 2 }, { x: 11, y: 8 }));
