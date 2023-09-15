function MathChallenge(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i <= num / 2; i++) {
    if (num % i === 0) return false;

    return true;
  }
  return !!num;
}

// keep this function call here
// console.log(MathChallenge(17));
const resultPrime = MathChallenge(19);
console.log(resultPrime);
