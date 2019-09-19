/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Make function called search and have it able to search through animals array with given string,
// Returns the object if there, return null if not
function search(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (string === array[i].name) {
            return array[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Make a function that takes a name of what to look for in array, and replaces it with another object
function replace(array, name, replacement) {
        for (let i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            return array.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Make a function that removes the object you give the name of.
function remove(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            return array.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Make a function that allows for creation and addition of another animal.
// THE NAME MUST BE UNIQUE
function add(array, obj) {
    for (let i = 0; i < array.length; i++) {
        if (obj.name === array[i].name) {
            return "Someone already has that name!";
        }
    }
    array.push(obj);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
