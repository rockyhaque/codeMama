/*

Search for Vowels

Problem Statement
Write a program to check if there is a vowel in a string.

Input
The input consists of a string.

Output
Output will be the answer whether there is a vowel or not. If there is vowel it will print "The string contains a vowel.", otherwise it will print "The string does not contain any vowel."

Constraints
The program will terminate whenever it finds a vowel.
Example-1:
Enter a String

Input:
Hello
Output:
The string contains a vowel.
Example-2:
Enter a String

Input:
BCDFGHJKLMNPQRSTVWXYZ
Output:
The string does not contain any vowel.

*/

function main (input) {
    /**
     * Write JavaScript code from here
     */

    let lowerCaseInput = input.toLowerCase();
    let containsVowel = false;

    for(let char of lowerCaseInput){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            containsVowel = true;
            break;
        }
    }
    if(containsVowel){
        console.log("The string contains a vowel.")
    } else{
        console.log("The string does not contain any vowel.")
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
