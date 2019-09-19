/*
 - Variables are the primary form of memory storage in JavaScript; they store
   the datatypes that JavaScript recognizes. This can be anything from simple
   datatypes, like numbers, strings, and booleans, to complex datatypes, like
   arrays, objects, and even functions.
 - Variables must be declared first, and they can be declared in three ways:
   'var', 'let', and 'const'.
    - 'var' is the loosest formed and oldest style of variable declaration. 
      It can be declared anywhere, and can be reassigned, whether a different
      value or a different datatype altogether, without issue. With how loosely it
      works, you can keep redeclaring it as many times as you wish.
      Example: */
      var a = 5;
      var a = 10;
      a = 15;
/*  - 'let' is a more recent form of variable declaration, and is a bit
      stricter on how it works. It sticks to the scope that it's on, and can be
      used in code block scopes. It can't be redeclared within the same scope,
      though it can be reassigned.
      Example: */
      let b = "This will work";
//    let b = "This will not work" Because you can't redeclare with let.
      b = "This still works";
/*  - 'const', short for constant, is a variable declaration that, while can
      also be used in code blocks, can only be declared once per code block and 
      cannot be reassigned a new datatype. That said, complex datatypes such as
      arrays and objects can still have values inserted and removed. The datatype
      itself cannot be changed.
      Example: */
      const c = "This works";
//    const c = "This doesn't work";
//    c = "This also doesn't work"; You can neither reassign nor redeclare constants.