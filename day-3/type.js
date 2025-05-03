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
 * 
 * HINT: There is a method that can help with this.
 I: input value
O: return true if array; false if not
C:
E:
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is array
    if (Array.isArray(value)){
        //if true returns true
        return true;
    } else {
        //not array returns false
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
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
I: input value
O: return true if object; false if not
C:
E: 
* 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // using if else to go through criteria
    //determine if value is array - if true-returns false not object
    if (Array.isArray(value)){
        return false;
    } else if (value === null){
        //determine if value is null - if true-returns false not object
        return false;
    } else if (value instanceof Date){
        ///determine if value is date - if true-returns false not object
        return false;
    } else if (typeof value === 'object'){
        //determine if typeof is object - if true-returns true for object
        return true;
    } else {
        return false;
    }      
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 I: input value
O: return true if object; true for array; false if not
C:
E:
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is array - if true-returns false not object
    if (Array.isArray(value)){
        return true;
    } else if (value === null){
        //determine if value is null - if true-returns false not object
        return false;
    } else if (value instanceof Date){
        ///determine if value is date - if true-returns false not object
        return false;
    } else if (typeof value === 'object'){
        //determine if typeof is object - if true-returns true for object
        return true;
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
 I: input value
O: return string of the type
C:
E: 
*/ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if typeof is object - determine if array, null, date or object to return string
    if (Array.isArray(value)){
        return 'array';
    } else if (value === null){
        //determine if value is null - if true-returns false not object
        return 'null';
    } else if (value instanceof Date){
        ///determine if value is date - if true-returns false not object
        return 'date';
    } else if (typeof value === 'object'){
        //determine if typeof is object - if true-returns true for object
        return 'object';
    } else {
        return typeof value;
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