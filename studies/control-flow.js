/* - There are many ways to control the flow of the JavaScript code that you
     build and run. It's very rare there is a straightforward movement while running
     code anyways, as variables can and cannot meet certain conditions, things can
     be looped through over and over for various reasons, etcetera.
   - There are several forms of control flow, and those primarily include loops
     and conditional statements. Both are rather straightforward; Loops loop 
     through whatever you wish to loop through until the cycle is complete and/or
     broken, and conditional statements run code if the inputted value is true.
     
   - Loops are a way to iterate repeatedly through a specific set of data,
     primarily used for strings and arrays. There are three primary ways to loop
     through code: With the 'for' loop, the 'for-in' loop, and the 'while' loop.
      - 'For' loops are by far the most basic of loops, but are surprisingly
        powerful when used right. They consist of the keyword 'for', followed by,
        enclosed in parentheses, the variable starting condition, the stopping
        condition, and the in-/decrementer. After the parentheses is the code
        block.
        Example: */
        const string = "Hello";
        for (let i = 0; i < string.length; i++) { // keyword (starting; stopping; in-/decrementer)
           console.log(string[i]); // Code block, Logs H, e, l, l, o
        } // Then leaves loop
        var arr = [1, 2, 3];
        for (let i = 0; i <arr.length; i++) {
           console.log(arr[i]); // Logs 1, 2, 3 to console
        }
/*    - The next kind of loop is a 'for-in' loop. The difference in wording is
        small, but there's a stark difference in what it can iterate through. 
        This form of loop is meant to run through just objects. Much like a 'for'
        loop runs through every index within the data it's given, 'for-in' loops
        run through every key within an object, using the placeholder name you
        give it.
        Example: */
        var obj = {a: 1, b: 2, c: 3};
        for (var key in obj) { // for (<placeholder declaration> in <object>)
           console.log(key + ": " + obj[key]); // Logs key: value for all keys in obj
        }
/*    - The last primary loop is a 'while' loop. This is a much simpler form of
        the 'for' loop, which can help cut down on typing. However, the 
        parentheses only have room for the stopping condition, meaning you have 
        to declare the starting variable outside the block and the in-decrementer
        inside the block.
        Example: */
        var str = "Good day!";
        var i = 0;
        while (i < str.length) {
           console.log(str[i]); // Logs 'G', 'o', 'o', 'd', ' ', 'd', 'a', 'y', '!' to console
        }
/* - Conditional statements are blocks of code that help determine which way to
     go within the code, much like a person making a choice within a dilemma.
     There are two formats to write conditional code, and those are called 
     'if/else-if/else' statements and 'switch' statments.
      - 'if/else-if/else' statements are statements that run code based off of
        the question: "If this is this, do this, else if..., or else...". It is
        consisted of the keyword 'if', with the option to add 'else if' and
        'else', depending on what your goal with the statement is. It first runs
        through the if statement criteria, running the code block under it if
        it's met. If it isn't, then it moves to the else if below it, and
        continues that trend until either one code block runs true, or they
        reach the 'default' statment, which is the else statement.
        Example: */
        var weather = 'cloudy';
        if (weather === 'sunny') { // Checks to see if weather is sunny (it's not)
           console.log("Bright skies and beautiful weather!");
        } else if (weather === 'partly cloudy') { // If false, it tries again with 'partly cloudy'
           console.log("Be ready for anything.");
        } else { // If all if's are false, then it goes to the else
           console.log("It's about to rain. Bring an umbrella!");
        }
/*    - The other conditional statement format, that 'switch' statment, is a
        more concise way of dealing with conditions, with no particular order to their
        run either. They run with the keyword with the variable you with to
        test with in parentheses. Inside the code block, they then go by 'cases'.
        If a case is met, it runs the code inside of the case block. You can
        also set a default if you wish, with the 'default' keyword. However, the
        switch statement doesn't break the interpreter out of the code unless
        you manually put in the 'break' keyword within the block as well.
        Example: */
        weather = 'partly cloudy';
        switch (weather) { // runs the expression as inputted
           case 'sunny': // "In the case it is sunny..."
              console.log("Bright skies and beautiful weather!"); // ..."Do this."
              break; // And break out of the block after.
           case 'partly cloudy': // Repeat for the rest of the cases
              console.log("Be ready for anything.");
              break;
           default: // If no cases are met, runs default instead.
              console.log("It's about to rain, Bring an umbrella!");
              break;
        }