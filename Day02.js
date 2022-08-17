const str = "Peter Parker is Spiderman";

function reverseAString(str) {
  // Write your solution here
  return str.split("").reverse().join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`);
