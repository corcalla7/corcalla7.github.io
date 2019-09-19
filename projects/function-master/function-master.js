//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Take the values of the object and return an array of their values
function objectValues(object) {
    const objectValues = [];
    for (var keys in object) {
        objectValues.push(object[keys]);
    }
    return objectValues;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// All keys in an object and make them a conjoined string, separated by a space
function keysToString(object) {
    var finalString = [];
    for (var key in object) {
        finalString.push(key);
    }
    return finalString.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Values should take an object and return all string values in a string separated w/ space
function valuesToString(object) {
    var finalString = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            finalString.push(object[key]);
        }
    }
    return finalString.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Take one argument and return string array if array, and string object if object
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof collection === 'object') {
        if (Array.isArray(collection)) {}
        if (collection === null) {}
        if (collection instanceof Date) {}
        if (typeof collection !== 'object') {}
        if (typeof collection === 'object') return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Take string of one word and return word with first letter capitalized
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take string of words and return string with all words capitalized
function capitalizeAllWords(string) {
    var strings = string.split(" ");
    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].slice(1);
    }
    return strings.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Take an object with a name value and return "Welcome <Name>!"
function welcomeMessage(object) {
    if (typeof object.name === 'string') {
        object.name = object.name[0].toUpperCase() + object.name.slice(1);
        return "Welcome " + object.name + "!";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Take object with name and species and return "<Name> is a <Species>!"
function profileInfo(object) {
    if (typeof object.name === 'string' && typeof object.species === 'string') {
        object.name = object.name[0].toUpperCase() + object.name.slice(1);
        object.species = object.species[0].toUpperCase() + object.species.slice(1);
        return "" + object.name + " is a " + object.species;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them
// as a string separated by a space, if there are no noises return 'there are 
// no noises'
function maybeNoises(object) {
    if (Array.isArray(object.noises) === false) {
        return "there are no noises";
    } else if (Array.isArray(object.noises) === true && object.noises.length === 0) {
      return "there are no noises";  
    } else {
        return object.noises.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in 
// <string of words>, otherwise return false.
function hasWord(string, word) {
    var stringArr = string.split(' ');
    for (var i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === word) {
            return true;
        } 
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends 
// array then return the object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and return true if <name> is a friend of 
// <object> and false otherwise
function isFriend(name, object) {
    if (object.friends !== undefined) {
        for (var i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
                return true;
            }
        } 
        return false;
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names 
// that <name> is not friends with
function nonFriends(name, array){
    var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }
    if(current === null){
        return nameList;
    }
    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> 
// on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings. Should remove any properties 
// on <object> that are listed in <array>
function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++) {    
        for (var key in object) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed
function dedup(array) {
  const uniques = [];
  const collation = {};
  var prop;
  for (let i = 0; i < array.length; i++) {
    var prop = array[i];
    collation["key" + prop] = prop
  }
  for (var key in collation) {
    uniques.push(collation[key]);
  }
  return uniques;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}