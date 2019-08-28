/*
 - String manipulation can work similarly to how other datatypes work, in the
   form of reassignment, giving it a new value, etcetra. However, strings can
   also be manipulated similarly to arrays, as they have the same indexed
   format for the individual characters and can functions with some of the 
   array methods. Such methods include .splice() and .slice(), but also can
   include .toUpperCase() and .toLowerCase(). Strings can even be called by
   individual characters using bracket notation.
 - The methods that can be used are fairly straight forward. .splice() allows
   you to replace a character or several characters with a new value, which is 
   automatically concatenated. .slice() cuts everything from the given indexes
   before and after, leaving you with what was between them. .toUpperCase() makes
   the string, or a single character, uppercased. .toLowerCase() does the same
   thing, but in the reverse order.
 - Bracket notation is what allows you to single out individual characters. By
   calling the variable that holds a string, and the index of the character you 
   wand to call in brackets, you can pull a single alphanumeric, or otherwise
   special character, including spaces.
    - Example:
        var string = "Hello World!"; // We want to call just the `H`.
        console.log(string[0]); // Will log the 0th character, `H`.
 - You can also concatenate, or push together, several strings, using the
   addition operator.
    - Example:
        function concat(string1, string2) {
            return string1 + string2; // Will concatenate the params.
        }
        var concatResult1 = concat(`Hello `, `World!`);
        console.log(concatResult1); // Logs which is `Hello World!`
        */