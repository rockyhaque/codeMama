/*

What will be the GCD?

Problem Statement
Write a program where you have to find the GCD(Greatest Common Divisor) of two numbers.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter two numbers.

Input:
9 12
Output:
3

*/

    const data = input.split(" ");
    const nums = data.map(element => Number(element))
    let n1 = nums[0];
    let n2 = nums[1];

    let a = n1 < n2 ? n1 : n2;
    let b = n1 < n2 ? n2 : n1;

    let temp = -1;

    while(a != 0){
        temp = b % a;
        b = a;
        a = temp;
    }
    console.log(b);
