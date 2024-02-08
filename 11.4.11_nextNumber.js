/*
Find Next Number

Problem Statement
Write a program where you will be given three numbers. You will have to find the next number.

Input
The input consists of three integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter three numbers.

Input:
3 5 7
Output:
9

*/

const data = input.split(" ")
const numbers = data.map(element => Number(element))
const nextNum = numbers[2] + (numbers[1] - numbers[0]);
console.log(nextNum);  
