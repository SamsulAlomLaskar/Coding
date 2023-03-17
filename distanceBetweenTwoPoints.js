//* Compose Currying

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

const distanceCurryingArrow = (start) => (end) =>
  +Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  ).toFixed(2);

console.log(distanceCurryingArrow({ x: 20, y: 30 })({ x: 10, y: 20 }));

const players = [
  {
    name: "Alice",
    color: "aliceblue",
    position: { x: 3, y: 5 },
  },
  {
    name: "Benji",
    color: "goldenrod",
    position: { x: -4, y: -4 },
  },
  {
    name: "Clarissa",
    color: "firebrick",
    position: { x: -2, y: 8 },
  },
];
const flag = { x: 0, y: 0 };

// const distanceFromFlag = distanceCurrying(flag);
const distanceFromFlag = distanceCurryingArrow(flag);
const curriedDistance = players
  .map((player) => player.position)
  .map(distanceFromFlag);
console.log(curriedDistance);

const ages = [11, 14, 26, 9, 41, 24, 108];

const isEven = (age) => (age % 2 === 0 ? true : false);

console.log(ages.filter(isEven));

function isEqualTo(comparator) {
  return function (value) {
    return value === comparator;
  };
}

const isEqualToArrow = (comparator) => (value) => value === comparator;
const isGreaterThan = (comparator) => (value) => value > comparator;
const isLessThan = (comparator) => (value) => value < comparator;

const isSeven = isEqualToArrow(7);
const isOfLegalMajority = isGreaterThan(18);

console.log(isSeven(2));
console.log(isOfLegalMajority(30));

// function to invert a value

const isNot = (value) => !value;

const isNotEqual = (comparator) => (value) =>
  isNot(isEqualToArrow(comparator)(value));

const isLessThanOrEqual = (comparator) => (value) =>
  isNot(isGreaterThan(comparator)(value));

console.log(isNotEqual(10)(30));
console.log(isLessThanOrEqual(10)(30));

const isTooYounToRetire = isLessThanOrEqual(65);

const agesNew = [31, 24, 86, 57, 67, 19, 93, 75, 63];

console.log(agesNew.filter(isTooYounToRetire));
console.log(agesNew.filter((age) => age <= 65));

/* 

? The every() method executes a function for each array element.

* The every() method returns true if the function returns true for all elements.

! The every() method returns false if the function returns false for one element.

? The every() method does not execute the function for empty elements.

* The every() method does not change the original array

*/

const isInRange = (minComparator) => (maxComparator) => (value) =>
  isGreaterThan(minComparator)(value) && isLessThan(maxComparator)(value);

const isValueTrue = isInRange(40)(30)(20);
console.log(isValueTrue);

// Now to make it reusable
/* 
const andOp = (conditions = (value) => conditions.every((val) => val(value)));

const isInRangeArrow = (min) => (max) =>
  andOp([isGreaterThan(min), isLessThan(max)]);

console.log(isInRangeArrow(20)(30));
 */

const obj1 = {
  first: 20,
  second: 30,
  first: 40,
};

/*
 ? The code you provided will cause a syntax error, as you cannot define two properties with the same name in an object.

In the code you provided, the first property is defined twice with different values, which is not allowed. If you try to run this code, you will get a syntax error message indicating that there is a duplicate property name.

* If you run the code you provided in a JavaScript environment, such as a web browser or Node.js, it will not produce a syntax error as I previously mentioned. Instead, the last property value assigned to a x will overwrite the previous one, as objects in JavaScript are key-value pairs where each key must be unique.
*/

console.log(obj1);
console.log(obj1.first);
