//Function which returns a random number in the given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  // Write your solution here
  return Math.floor(Math.random() * (rangeEnd - rangeStart) + 1) + rangeStart;
}

console.log(`My rnadom number: ${randomNumberGeneratorInRange(555, 100)}`);
