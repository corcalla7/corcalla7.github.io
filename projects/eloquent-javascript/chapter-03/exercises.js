////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Takes two arguments and returns the lower of the two
function min(num1, num2) {
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Finds if number is even, returns true if yes, false if no
function isEven(num) {
  if (Math.abs(num) % 2 === 0) {
    return true;
  } else if (Math.abs(num) % 2 === 1) {
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Should take two parameters, a string and a string of a single character, and
// return amt. of times the character shows up in string
function countChars(string, character) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (character == string[index]) {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Should be able to count the number of 'B's in a given string
function countBs(string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == "B") {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
