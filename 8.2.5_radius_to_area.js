/*
Radius to Area

Problem Statement
Write a program that prompts the user for a radius and calculates the area of a circle with that radius.

Input
The input consists of a float.

Output
Output the area of the circle.

Constraints
π = 3.14
Example:
Enter the radius of the circle

Input:
5
Output:
The area of the circle is 78.5 square units.

*/

function main (input) {
    /**
     * Write JavaScript code from here
     */
    const radius = Number(input);
    const area = 3.14 * radius * radius;
    console.log(`The area of the circle is ${area.toFixed(2)} square units.`)
    
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
