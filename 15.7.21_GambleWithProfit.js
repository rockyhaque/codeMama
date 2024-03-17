/*
Gamble with Profit

Problem Statement
Write a program that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

Input
The input consists of one float F and two integer N, M numbers

Output
The output will print either "true" or "false"

Constraints
0 ≤ |F| ≤ 1
0 ≤ |N| ≤ 104
0 ≤ |M| ≤ 104
Example:
Enter numbers

Input:
0.2 50 9

Output:
true

*/

    const data = input.split(" ");
    const nums = data.map(element => Number(element));
    const prob = nums[0];
    const prize = nums[1];
    const pay = nums[2];

    if(prob * prize > pay){
        console.log('true')
    } else{
        console.log('false')
    }



