const totalGrains = () => {
  // Code here

  return (1n << 64n) - 1n;
};

const grainsOn = (input) => {
  // Code here
  let result = 1;
  for (let i = 1; i < input; i++) {
    result *= 2;
  }

  return BigInt(result);
};

console.log(`Grains on 5th square: ${grainsOn(5)}`);
console.log(`Total grains upto 5th square: ${totalGrains(5)}`);
console.log(`Total grains on the Chess Board: ${totalGrains()}`);
