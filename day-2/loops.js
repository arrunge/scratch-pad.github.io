// #!/usr/bin/env node

'use strict';

const { keyBy } = require("lodash");

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
I: input array
O: print each value of array - looping forward
C:
E:
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //for loop - start at zero index - End: last index: looping forward - increment
  for (var index = 0; index <= array.length - 1; index++ ){
    //logging each value to console
    console.log(array[index]);
  }
     
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
I: input array
O: print each value of array - looping backwards
C:
E:
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //for loop - start at last index - end: first index: looping backward-decrement
  for (var index = array.length - 1; index >= 0; index-- ){
    //logging each value to console
    console.log(array[index]);
  }
    
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
I: input object
O: return array containing object keys
C:
E: 
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //array to store keys
  let objKey = [];
  //for in loop - to access object key
  for (var key in object){
    //add - push key to array objKey
    objKey.push(key);
  }
  //return array of keys
  return objKey;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
I: input object
O: print keys to console
C:
E: 
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //for in loop - to access object key
  for (var key in object){
    //print key to console
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
I: input object
O: return array of object's values
C:
E: 
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //array to store values
  let objVal = [];
  //for in loop - to access object key
  for (var key in object){
    //add - push value to array objVal
    objVal.push(object[key]);
  }
  //return array of values
  return objVal;
    
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
I: input object
O: print object's values to console
C:
E: 
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){
    //console log object's values
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
I: input object
O: return number of key/value pairs in object
C:
E: 
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //for in loop to access key/value pairs
  //counter variable
  let count = 0;
  for (var key in object){
    //within loop use counter to determine number of key/value pairs
    count++;
  }
  //return count of key/value pairs
  return count;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
I: input object
O: print object values
C:loop over object in reverse
E: 
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //array to store object values
  let arrValues = Object.values(object);
  //loop through array of values
    for (index = arrValues.length - 1; index >= 0; i--){
    //print values to console
    console.log(arrValues[index]);
  }
   
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}