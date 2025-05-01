// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
I: function 
O: print numbers 1 too 100; multiple of 3 - print Fizz; multiple of 5 - print Buzz; multipe of 3 and 5 - print FizzBuzz
C:
E:

*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //loop to print numbers  1 to 100
    for (var index = 1; index <= 100; index++){
        //if - else conditions to determine multiples of 3&5
        if (index % 3 === 0 && index % 5 === 0){
            //print FizzBuzz
            console.log('FizzBuzz');
        } else if (index % 3 === 0){
            console.log('Fizz');
        } else if (index % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(index);
        }
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}