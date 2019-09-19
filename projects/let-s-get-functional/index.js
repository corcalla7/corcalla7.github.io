// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-corcalla7");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./corcalla7.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // Find the # of male customers using .filter().
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            if (array[i]["gender"] === "male") {
                count++;
            }
        }
    }
    return count;
};

var femaleCount = function(array) {
        // Find the # of female customers using .filter().
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            if (array[i]["gender"] === "female") {
                count++;
            }
        }
    }
    return count;
};

var oldestCustomer = function(array) {
    // Find the oldest customer
    const ages = [];
        for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            ages.push(array[i]["age"]);
        }
    }
    var oldest = Math.max(...ages);
    for (let u = 0; u < array.length; u++) {
        if (array[u]["age"] === oldest) {
            return array[u]["name"];
        }
    }    
};

var youngestCustomer= function(array) {
    // Find the youngest customer
    const ages = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            ages.push(array[i]["age"]);
        }
    }
    var youngest = Math.min(...ages);
    for (let u = 0; u < array.length; u++) {
        if (array[u]["age"] === youngest) {
            return array[u]["name"];
        }
    }    
};

var averageBalance = function(array) {
    // Find the average balance of all people
    const balances = [];
    for (let i = 0; i < array.length; i++) {
        balances.push(parseFloat(array[i].balance.replace('$', '').replace(',', '')));
    }
    console.log(balances);
    var amount = balances.length;
    var total = balances.reduce(function(a, b) {return a + b});
    console.log(total/amount);
    return (Math.floor((total/amount)*100)/100);
};

var firstLetterCount = function(array, letter) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]["name"][0].toUpperCase() === letter.toUpperCase()) {
            count++;
        }
    }
    return count;
};

var friendFirstLetterCount = function(array, customer, letter) {
    // Find the # of people in a customer's friend list that starts with <letter>
    var count = 0;
    var index;
    for (let i = 0; array.length; i++) {
        if (array[i]["name"] === customer) {
            index = array[i];
            break;
        }
    }
    for (let i = 0; i < index["friends"].length; i++) {
        if (index["friends"][i]["name"][0] === letter.toUpperCase()) {
            count++;
        }
    }
    return count;
}; 

var friendsCount = function(array, name) {
    // Name the many friends <name> has
    const names = [];
    for (let i = 0; i < array.length; i++) {
        for (let u = 0; u < array[i]["friends"].length; u++) {
            if (array[i]["friends"][u]["name"] === name) {
                names.push(array[i]["name"]);
            }
        }
    }
    return names;
};

var topThreeTags = function(customers) {
  var output = [];
  var tagMap = {};
  customers.forEach(function(customer) {
    customer.tags.forEach(function(tag) {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });
  var sortedArr = Object.keys(tagMap).map(s => [s, tagMap[s]]).sort((a, b) => a[1] - b[1]);
  var preOutput = sortedArr.slice(-3);
  for (var i = 0; i < preOutput.length; i++) {
    output.push(preOutput[i][0]);
  }
  return output;
};

var genderCount = function(array) {
    const final = {
        male: null,
        female: null,
        "non-binary": null
    };
    var male = 0;
    var female = 0;
    var other = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]['gender'] === 'male') {
            male++;
        } else if (array[i]['gender'] === 'female') {
            female++;
        } else {
            other++;
        }
    }
    final.male = male;
    final.female = female;
    final["non-binary"] = other;
    return final;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
