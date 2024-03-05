/*
Calculate power of this number

Problem Statement
Write a program where you will be given a number and it's exponent. You will have to calculate the power of the number.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter numbers.

Input:
3 4
Output:
81

*/

    const data = input.split(" ");
    const nums = data.map(element => Number(element));
    const number = nums[0];
    const exponent = nums[1];

    const result = Math.pow(number, exponent);

    console.log(result)
