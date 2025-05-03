// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * 
 * 
 * I: input base - string or number
O: return function to determine if given value greater than base
C:
E:
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return functions 
    return function(value){
        //checks value > base and returns
        return (value > base);
    }
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
I: input base - string or number
O: return function to determine if given value less than base
C:
E: 
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return function
    return function(value){
        //checks if value is less than base
        return(value < base);
    }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
I: input character
O: return function that returns first character of string
C:
E: 
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return function for first character
    return function(string){
        //checks if string starts with character (startsWith)
        //make sure to test case sensitive
        return string[0].toLowerCase() === startsWith.toLowerCase();
    }
    
       
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
I: input character
O: return function that returns last character of string
C:
E: 
*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return function for last character
    return function(string){
        //checks if string last character (endsWith)
        //.length - 1 to check last char
        //make sure to test case sensitive
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    }
     
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
I: array of strings and function - modify
O: array of modified strings
C:
E: 
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
      //declare output array
     let outputArray = [];
        //loop through strings array
        for(var index = 0; index < strings.length; index++){
            //save modified array to outputArray
            outputArray.push(modify(strings[index]));
        }
         //return modified strings array 
        return outputArray;
        // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
I: array of strings and function - test
O: return boolean - true if all strings pass otherwise false
C:
E: 
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //while loop - iterate through strings-array
       let index = 0; 
      while(index < strings.length){
        //check string passes test
        if (test(strings[index]) === true){
            index++;
        } else {
            return false;
        }
         
    }
    return true;     
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}