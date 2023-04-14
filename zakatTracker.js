const zakatCalculator = (zakataRate, zakatAmount) => {
  zakataRate = zakataRate / 100000;

  return Math.round(zakataRate * zakatAmount);
};

console.log(zakatCalculator(2500, 534023));
const check = zakatCalculator(2500, 329083);
console.log(check);

//* =====================

let num = [1, 2, 3];
num[3] = num;
console.log(num);
