
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Create a loop that calls console.log 7 times, and makes a pyramid out of # symbols
function triangles(num) {
  let i = 1;
  let call = "#";
  while (i <= num) {
    console.log(call);
    call += "#";
    i++;
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Log from 1 to a number value, with these special rules:
 * Mults of 3 return "Fizz"
 * Mults of 5 return "Buzz"
 * Mults of 3 & 5 return "FizzBuzz"
 */

function fizzBuzz(start, finish) {
  let i = start;
  while (i <= finish) {
    if ((i % 15) === 0) {
      console.log("fizzbuzz");
    } else if ((i % 5) === 0) {
      console.log("buzz");
    } else if ((i % 3) === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
    i++;
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Generate a chessboard patter in console using # and spaces

function drawChessboard(size) {
  var left = "";
  var right = "";
  var final = [];
  if (size % 2 === 0) {
    for (let r = 0; r < (size / 2); r++) {
      right += " #";
      
    }
    for (let l = 0; l < (size / 2); l++) {
      left += "# ";
    }
    for (let f = 0; f < (size / 2); f++) {
      final.push(right);
      final.push(left);
    }
  } else if (size % 2 === 1) {
    for (let r = 0; r < ((size - 1) / 2); r++) {
      right += " #";
    }
    right += " ";
    for (let l = 0; l < ((size - 1) / 2); l++) {
      left += "# ";
    }
    left += "#";
    for (let f = 0; f < ((size - 1) / 2); f++) {
      final.push(right);
      final.push(left);
    }

    final.push(right);
  }
  final.push("");
  console.log(final.join("\n"));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
