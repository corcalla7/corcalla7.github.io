// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // Test to see if the code is an array
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Test to see if code is an object and not any other collection
    if (Array.isArray(value)) return false;
    if (value === null) return false;
    if (value instanceof Date) return false;
    if (typeof value !== 'object') return false;
    if (typeof value === 'object') return true;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // test to see if code is a collection
    if (typeof value === 'object') {
        if (value instanceof Date) {
            return false;
        } else if (value === null) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // determine what type of data the value is
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return "array";
        } else if (value instanceof Date) {
            return "date";
        } else if (value === null) {
            return "null";
        } else {
            return "object";
        }
    } else if (typeof value !== 'object') {
        if (typeof value === 'number') {
            return "number";
        } else if (typeof value === 'boolean') {
            return "boolean";
        } else if (typeof value === 'string') {
            return "string";
        } else if (value === undefined) {
            return "undefined";
        } else {
            return "function";
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
