// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I:input a string
O: output length of string 
C:
E:
*/
function length(string) {
    // YOUR CODE BELOW HERE //
    //getting length of string and return
    return string.length;
  
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I:input a string
O: return string in lowercase 
C:
E:
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   //force string to lowercase and return
   return (string.toLowerCase());

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
I:input a string
O: return string in uppercase 
C:
E:
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //force string to uppercase and return
   return (string.toUpperCase());
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 I:input a string
O: return a string in lowercase and spaces replaced with dashes 
C:
E:
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //force to lowercase and store in lowerString
    let lowerString = string.toLowerCase();
    //replace spaces with dashes and return
    return (lowerString.replaceAll(" ", "-"));
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
I:input a string and single character
O: return true if first character is same; false if not same - case doesn't matter 
C:
E: 
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //store first letter of string
    let firstLetter = string[0];
    //use if statement to determine if same character
    if (firstLetter.toLowerCase() === char || firstLetter.toUpperCase() === char){
        return true;
    } else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
I:input a string and single character
O: return true if last character is same; false if not same - case doesn't matter 
C:
E: 
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //getting last letter of string
    let lastLetter = string.slice(-1);
    //use if statement to determine if same character
    if (lastLetter.toLowerCase() === char || lastLetter.toUpperCase() === char){
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 I:input 2 strings 
O: return 1 string combined 
C:
E: 
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //concat the strings    
    let newString = stringOne.concat(stringTwo);
    return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
I:input 2 strings 
O: return 1 string combined 
C: use join
E: use Array.from to pull each word 
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //join args into new string
    let newString = args.join('');
    //return newString
    return newString;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
I:input 2 strings 
O: return the longest string 
C:
E: 
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //determine length of strings
    let lenOne = stringOne.length;
    let lenTwo = stringTwo.length;
    //if statement to determine which is longer
    if (lenOne > lenTwo){
        //if stringOne longer return
        return stringOne;
    } else {
        //otherwise StringTwo is longer
        return stringTwo;
    }




    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
I:input 2 strings 
O: return 1 if first string comes first in alpha; -1 if 2nd string first in alpha; 0 if equal 
C:
E: 
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //using truthy and falsy to determine alpha order
    if (stringOne < stringTwo){
        ////returns 1 stringOne comes first alpha
        return 1;
    } else if (stringOne > stringTwo){
        //returns -1 stringTwo comes first alpha
        return -1;
    } else {
        return 0;
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
I:input 2 strings 
O: return 1 if first string comes later in alpha; -1 if 2nd string first in alpha; 0 if equal 
C:
E: 
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //using truthy and falsy to determine alpha order
    if (stringOne > stringTwo){
        ////returns 1 stringOne comes first alpha
        return 1;
    } else if (stringOne < stringTwo){
        //returns -1 stringTwo comes first alpha
        return -1;
    } else {
        //return 0 if equal 
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}