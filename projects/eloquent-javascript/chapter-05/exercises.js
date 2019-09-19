// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Reduce an array of arrays to a single array
function flatten(array) {
  for (let i = 1; i < array.length; i++) {
    for (let u = 0; u < array[i].length; u++) {
      array[0].push(array[i][u]);
    }
  }
  return array[0];
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Takes a value and three functions and runs a loop
function loop(value, test, update, body) {
  if (test(value)) {
      body(value);
  } else return; 
  return loop(update(value),test,update,body);


}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
      if (Array.isArray(array) === true) {
        if (test !== undefined) {
            for (let i = 0; i < array.length; i++) {
                if (test(array[i], i, array) === false) {
                    return false;
                }
            }
        return true;
        } else if (test === undefined) {
            for (let u = 0; u <array.length; u++) {
                if (!!array[u] === false) {
                    return false;
                }
            }
            return true;
        }
    }
    if (typeof array === 'object') {
        if (test !== undefined) {
            for (var key in array) {
                if (test(array[key], key, array) === false) {
                    return false;
                }
            }
        return true;
        } else if (test === undefined) {
            for (var key in array) {
                if (!!array[key] === false) {
                    return false;
                }
            }
            return true;
        }
    }
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Determine the direction a language is supposed to be written in (ex. Arabic 
// is rtl)
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
