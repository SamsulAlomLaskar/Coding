/* 
* What is currying & Why is currying useful in JavaScript?

? Currying It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 

* It helps us to create a higher-order function
! It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
? It is very useful in building modular and reusable code
* It helps us to avoid passing the same variable multiple times
! It makes the code more readable

 */

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(6));

// Recursion example

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return factorial(num - 1) * num;
}

console.log(factorial(5));
