//? Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for (let i = 0; i <= 10; i++) {
  let fizz = i % 3 == 0,
    buzz = i % 5 == 0;
  console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : buzz ? "Buzz" : i);
}
