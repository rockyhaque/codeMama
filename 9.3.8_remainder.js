/*
Remainder Reminder

Problem Statement
Write a program to find the remainder of two numbers (modulo operation).

Input
The input consists of two integers.

Output
Output will be the remainder.

Constraints
-2 31 ≤ |S| ≤ 231 - 1
Example:
Enter two numbers

Input:
5 3
Output:
2
*/

function main (input) {
    /**
     * Write JavaScript code from here
     */

    const data = input.split(" ");
    const numberData = data.map(item => Number(item))
    const res = numberData[0] % numberData[1]
    console.log(res);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
