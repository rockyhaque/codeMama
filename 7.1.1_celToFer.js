/*
# Celsius to Fahrenheit

Problem Statement
Write a program to convert temperature from Celsius to Fahrenheit.

Input
The input consists of a float number.

Output
Output will be the Fahrenheit value.

Constraints
The program should print the number with exactly two decimal points.

Example:
Enter the temperature in Celsius

Input:
32
Output:
The temperature in Fahrenheit is: 89.60

*/

function main (input) {
    const celsius = Number(input)
    const fahrenheit = celToFer(celsius)
    console.log("The temperature in Fahrenheit is:",fahrenheit.toFixed(2))
}

function celToFer(celsius){
    const fahrenheit = celsius * (9/5) + 32
    return fahrenheit;
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
