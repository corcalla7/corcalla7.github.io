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
    - Assignment operators, such as =, +=, -=, *=, /=, and %= are used to
      set values to variables. They mostly work in the same manner as arithmetic
      operators, but allow you to shorten your code, as the system understands it
      to be a standard equation. On a similar vein, var++ and var -- work to 
      shorten the operations even more, with the tradeoff being that it can only
      go up or down 1 with numeric values.
    - Comparison operators such as <(=), >(=), ==(=), and !=(=) compare two
      different values and determines a boolean value, true or false. The 
      greater than (or equal to) determines if the left value is numerically
      higher than the value on the right. THe inverse is true for the less than
      (or equal to). Equal to comes in two different forms, roughly or strictly.
      Roughly, ==, sees if the values are the same, whereas strictly, ===, sees
      if the value AND the datatypes are the same.
    - Logical operators such as && and || are meant to shorten the code by
      offering multiple outlets within one line. the AND (&&) operator will
      only return true if all expressions are met with a true value. The OR (||)
      operator will return true if only one of the expressions are true.
      */