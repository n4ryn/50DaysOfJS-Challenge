const num = 3849;

function reverseGivenInteger(num) {
  // Write your code here
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);

// Notes

// parseFloat(var) --> The parseFloat() function parses an argument (converting it to
//                     a string first if needed) and returns a floating point number.

// Math.sign(arg) --> The Math.sign() function returns either a positive or negative
//                    +/- 1, indicating the sign of a number passed into the argument.
//                    If the number passed into Math.sign() is 0, it will return a +/- 0.
//                    Note that if the number is positive, an explicit (+) will not be
//                    returned.
