/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Make an object literal named animal, and give it a species key, name key, and noises key, using dot, bracket, then either notation, respectively. First two can be related strings, but noises is an array literal.
var animal = {};
animal.species = "dog";
animal["name"] = "Buddy";
animal.noises = [];
// Log it to console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Make an array literal named noises. Use bracket notation to add a noise string, and push another, then unshift another. Then dynamically brac. notation another.
var noises = [];
noises[0] = "bark";
noises.push("woof");
noises.unshift("ruff");
noises[noises.length] = "bow wow";
// Log the length, the last element, dynamically, and the entire array.
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Add the noises array to the animal object using bracket notation
animal["noises"] = noises;
// Add another noise
animal.noises.push("growl");
// Log the new object
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  A: Through dot notation (object.key) or bracket notation, using quotes (object["key"])
 * 2. What are the different ways of accessing elements on arrays?
 *  A: Bracket notation (array[index]), and array methods (.push, .pop, .shift, .unshift, .etc...)
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an array literal named animals, and push the animal object into it
var animals = [];
animals.push(animal);
//log to console
console.log(animals);
// create the duck variable and init it with the relevant data, and push it
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
// Log animals again
console.log(animals);
// Make two more different animals objects, and push them into the animals array
var cat = {
    species: "cat",
    name: "Katherine",
    noises: ["meow", "hiss"]
};
var owlbear = {
    species: "owlbear",
    name: "Maddy",
    noises: ["hoot", "scree", "growl"]
};
animals.push(cat);
animals.push(owlbear);
// Log it again, and the length as well
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Make a list variable for friends. Array, because the order doesn't exactly matter, and key/value pairs would bog everything down
var friends = [];
// Make a function getRandom and use it to give one animal a random friend
function getRandom(animals) {
    return (Math.floor(Math.random() * Math.floor(animals.length)));
}
animals[getRandom(animals)].friends = friends;
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
