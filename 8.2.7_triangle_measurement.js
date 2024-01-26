/*
Triangle Measurement

Problem Statement
Write a program to calculate the area of a Triangle.

Input
The input consists of two integer numbers which will take the values for base and height of a triangle.

Output
Output will be the area which will be an integer number.

Constraints
0 ≤ |S| ≤ 231 - 1
Example:
Enter the base and height of the triangle

Input:
10 20
Output:
100

*/

function main (input) {
    /**
     * Write JavaScript code from here
     */
    const data = input.split(" ");
    const nums = data.map(item => Number(item));
    const areaOfTriangle = 0.5 * (nums[0] * nums[1]);
    console.log(parseInt(areaOfTriangle))
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
