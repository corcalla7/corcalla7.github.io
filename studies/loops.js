/*
 - Loops are a behavior in JavaScript that runs through the code block it
   contains as long as the criteria to keep it going are met.
 - There are multiple kinds of loops, and they all have different purposes:
   `for` loops, `for-in` loops, and `while` loops.
    - `for` loops are primarily used for arrays. They contain a starting 
      condition, which is a variable declaration, followed by a stopping
      condition, which is the criteria that will tell how many times to loop it,
      generally put in an inequality format. Finally is the in/decremental, which
      happens after every run time, to make sure that it isn't an infinite loop.
      it's normally formatted like so: */
      var arr = [1, 2, 3];
        for (let number = 0; number < arr.length; number++){
            console.log(arr[number]); // Logs 1, then 2, then 3.
        }
/*  - `for-in` loops are primarily used for objects. They work similar to `for`
      loops, except instead of searching through an array with its index, it
      instead works with the key/value pairs in objects. When declared, it calls
      for a placeholder key name (typically just 'key'), inside of the object you
      wish to loop through. It then runs the code block for every key/value pair
      inside the object, including any other objects nested inside.
      Example: */
      let obj = {name: "Madonna", age: "Too High"};
        for (var key in obj) {
            console.log(key + ": " + obj[key]); // Logs <key>: <value> to console
        }
/*  - `while` loops are the simplest to set up, and can be thought of as a 
      shortened `for` loop, as the only components are the keyword and the 
      conditional statment, in the form of a comparison statement. It doesn't
      describe a way to increase or decrease every repetition, meaning you have to
      manually imput one in the code block.
      Example: */
      let arr2 = ["Hello", "World", "My name is", "Amanda"];
      let count = 0;
        while (count < arr2.length) {
            console.log(arr2[count]); // Logs the value in the array index = count
            count++;
        }
/*  - Each loop can be described as going forwards or backwards, depending on if
      they are going up or down the numeric values, respectively. Going up the number
      line is considered forward looping, and going down the number line is considered
      backwards looping.
 */