//? Distance between two points using arrow function

//! Distance calculation formula ====> \/ (x2-x1)^2 + (y2-y1)^2

const distance = (start, end) =>
  +Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  ).toFixed(2);

console.log(distance({ x: 2, y: 2 }, { x: 11, y: 8 }));

//? Distance between two points using Curring

const distanceCurrying = function (start) {
  return function (end) {
    return +Math.sqrt(
      Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
    ).toFixed(2);
  };
};
console.log(distanceCurrying({ x: 33, y: 20 })({ x: 20, y: 10 }));
