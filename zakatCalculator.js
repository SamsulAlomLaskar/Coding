const zakatCalculator = (zakataRate, zakatAmount) => {
  zakataRate = zakataRate / 100000;

  return Math.round(zakataRate * zakatAmount);
};

const check = zakatCalculator(2500, 329083);
console.log(check);
