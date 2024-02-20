/*

Reverse the Number

Problem Statement
Write a program where user will give a number. You will reverse the number and print it.

Input
The input consists of an integer number.

Output
The output will be the reverse of the integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter number.

Input:
1234

Output:
4321

*/

    const data = input.split('');
    const inputNum = data.map(element => Number(element));
    const reverseNum = inputNum.reverse();
    const joinArray = reverseNum.join('');
    const nonLeadingZero = joinArray.replace(/^0+/, '');
    console.log(nonLeadingZero)
