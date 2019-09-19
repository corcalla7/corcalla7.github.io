/*
 - Operators are built-in items in JavaScript that act on the values that we
   insert. They don't store anything, but they can change things around, whether
   statically or dynamically.
 - They come in four different kinds: Arithmetic, Assignment, Logical, and
   Comparison.
    - Arithmetic operators, such as +, -, *, and /, are meant to add to, take
      away from, multiply together, or divide numeric values, with the occasional
      string. + is meant to add them together, as well as concatenate strings. -,
      *, and / only have effect on numeric values. There is also the % operator,
      which is similar to the / operator, except it returns the remainder of the
      operation, rather than the quotient.
      Examples: */
      let num = 5;
      num = num + 5; // 5 + 5 = 10
      num = num - 7; // 10 - 7 = 3
      num = num * 3; // 3 * 3 = 9
      num = num / 9; // 9 / 9 = 1
/*  - Assignment operators, such as =, +=, -=, *=, /=, and %= are used to
      set values to variables. They mostly work in the same manner as arithmetic
      operators, but allow you to shorten your code, as the system understands it
      to be a standard equation. On a similar vein, var++ and var -- work to 
      shorten the operations even more, with the tradeoff being that it can only
      go up or down 1 with numeric values.
      Examples: */
      let num2 = 20; // Basic assignment
      num2 += 10; // 20 + 10 = 30
      num2 -= 5; // 30 - 5 = 25
      num2 *= 2; // 25 * 2 = 50
      num2 /= 5; // 50 / 5 = 10
      num2 %= 2; // 10 % 2 = 0. Modulous takes remainder, and that is 0.
      num2++; // +1 = 1
      num2--; // -1 = 0
/*  - Comparison operators such as <(=), >(=), ==(=), and !=(=) compare two
      different values and determines a boolean value, true or false. The 
      greater than (or equal to) determines if the left value is numerically
      higher than the value on the right. THe inverse is true for the less than
      (or equal to). Equal to comes in two different forms, roughly or strictly.
      Roughly, ==, sees if the values are the same, whereas strictly, ===, sees
      if the value AND the datatypes are the same.
      Examples: */
      console.log(1 < 2); // Logs false
      console.log(5 <= 5); // Logs true
      console.log(10 > 8); // Logs true
      console.log(1 >= -5); // Logs true
      console.log(1 == "1"); // Logs true
      console.log(1 === "1"); // Logs false
      console.log(1 != 1); // Logs false
      console.log(1 !== "1"); // Logs true
/*  - Logical operators such as && and || are meant to shorten the code by
      offering multiple outlets within one line. the AND (&&) operator will
      only return true if all expressions are met with a true value. The OR (||)
      operator will return true if only one of the expressions are true.
      Examples: */
      if (1 === 1 && "Hello" > "Hi") {
         console.log(true); // Logs true if 1 equals 1 AND Hello is greater than Hi
      }
      if (8675 < 309 || 8.675 < 309) {
         console.log(true); // Logs true if 8675 is less than 309 OR 8.675 is less than 309
      }