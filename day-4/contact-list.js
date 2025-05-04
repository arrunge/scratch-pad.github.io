// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
I: factory function - takes 3 parameters 
O: return contact object
C:
E: 
*/

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       //length of contacts
        length: function (){
        return contacts.length;
       },
       //adding contact 
        addContact: function (contact){
        contacts.push(contact);
        },
        //find contact by fullName
        findContact: function(fullName){
            let testName = '';
            //loop to iterate through contacts array
            for(var index = 0; index < contacts.length; index++){
                //determine if string mataches array-object
                //var to compare
                testName = contacts[index]['nameFirst'].toLowerCase() + " " + contacts[index]['nameLast'].toLowerCase();
                if(fullName.toLowerCase() === testName){
                    return contacts[index];
                } else {
                    return undefined;
                }
            }

        },
        //remove a contact
        removeContact: function(contact){
            //given a contact - remove that contact if matches
            let tempContact;
            //iterate through the contacts array
            for(var index = 0; index < contacts.length; index++){
                tempContact = contacts[index];
                if (contact === tempContact){
                    contacts.splice(index, 1);
                }
            }
        },
        //print all contact names to string with line breaks
        printAllContactNames: function (){
            //outputString - store list of names
            let outputString = '';
            //iterate through contacts array
            for (var index = 0; index < contacts.length; index++){
                //adding names with line break to outputString
                outputString = outputString + contacts[index]['nameFirst'] + " " + contacts[index]['nameLast'] + '\n';   
            }
            //remove last page break from string
            outputString = outputString.trim();
            //return outputString
            return outputString;
        }
               
    }
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}