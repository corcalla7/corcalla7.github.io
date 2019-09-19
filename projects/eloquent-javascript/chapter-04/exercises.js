////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Take two numbers and returns an array of the numbers between

function range(start, end, step) {
  let arr = [];
  let higher = Math.ceil(Math.max(start, end));
  let lower = Math.floor(Math.min(start, end));
  if (start === end) {
    return arr;
  }
  if (step === undefined) {
    for (let i = lower; i <= higher; i++) {
      arr.push(i);
    }
  } else if (step !== undefined && step > 0) {
    for (let z = lower; z <= higher; z += step) {
      arr.push(z);
    }
  }

  return arr;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Takes an array with numbers and add all values together
function sum(array) {
  var number = 0;
  if (array.length === 0) {
    return number;
  }
  const add = (a, b) => 
    a + b;
  number = array.reduce(add);
  return number;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Should take an array and reverse it
function reverseArray(array) {
  const newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Takes any amount of parameters and returns a reversed array of them, done in 
// place.
function reverseArrayInPlace(array) {
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Make a nested object list with a given array, and return it.
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Converts a nested object list to an array, and returns it.
function listToArray(object) {
  if (object.rest === null) {
    return [object.value];
  }
  return [object.value].concat(listToArray(object.rest));
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Adds the given value to the beginning of a nested object list.
function prepend(value, list) {
     return {
       value: value,
       rest: list
     };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Returns the nth value in a nested object list
function nth(list, position) {
  if (position < 0) {
    return undefined;
  }
  if (list.value === position + 1) {
    return list.value;
  }
  return nth(list.rest, position);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Returns true or false depending on the inputs
function deepEqual(obj1, obj2)
{
    var truefalse = true;
    var type1 = typeof obj1;
    var type2 = typeof obj2;
// In case both are objects
    if(type1 == 'object' && type2 == 'object')
    {
        var prop1 = [];
        var prop2 = [];
        for(var prop in obj1)
            prop1.push(prop);
        for(var prop in obj2)
            prop2.push(prop); 
        // Test if both objects have the same number of properties
        if(prop1.length == prop2.length)
        {
            // Test if all properties between them have the same names,
            // by generating index for each property in prop1 against prop2
            var indexArray = [];
            for(var i = 0; i < prop1.length; i++)
            {
                var index = prop2.indexOf(prop1[i]);
                indexArray.push(index);
            };
            // If there's no "-1" anywhere in the indices generated
            // (all properties are named the same between them),
            // move on to value comparison for each property
            if(indexArray.indexOf(-1) == -1)
                {
                  for(var event in obj1)
                  {
                      if(deepEqual(obj1[event], obj2[event]) == false)
                          return false
                  };
                }
            // Different property names
            else
                truefalse = false;
        }
        // Different number of properties
        else
            truefalse = false;
    }
    // Either/both are not objects
    else
        truefalse = (obj1 === obj2);
    return truefalse;
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
