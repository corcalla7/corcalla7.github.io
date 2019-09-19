/* 
 - Functions are on a strange middle ground between datatype and operator,
   meaning that they can be stored like data, but they in and of themselves
   have code that is acted on whenever called upon.
 - Functions are created with the keyword 'function', and can be given a name.
   All functions `can` be given parameters, to allow for more dynamic usage when
   called upon at runtime.
   Example: */
   function myFunc(value) {
      console.log(value);
   }
/*-Functions consist of the calling keyword, the name, parameters/arguments, and
   a code body. the keyword 'function' simply tells the code that this is a 
   function being created. The name is the identifier. It isn't required, but it's 
   highly recommended save fore some select situations. There are parameters and
   arguments, which are set in the same place, but have different uses. Parameters
   are considered placeholder variables for the input throughout the function, and
   arguments are the values those placeholder variables have. If they aren't set,
   or go past the amount of parameters set, then they are considered undefined, or
   are entirely ignored. Parameters can also be set to have a default value, if
   there was no input given otherwise. */
   function sumFunc(num1, num2 = 0) { // keyword identifier(parameter(s)) {Code Body}
      console.log(num1 + num2);
   }
   // Calling is as simple as the identifier with () past it, inserting arguments
   // where necessary.
   sumFunc(); // NaN because undefined + 0.
   sumFunc(5, 5); // 10
   sumFunc(3, 6, 9); // 9, because function ignores the third param
   sumFunc(8); // 8, because 8 + , even though num2 wasn't defined manually.