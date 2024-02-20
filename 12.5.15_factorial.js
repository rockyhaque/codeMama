/*
Find Factorial

Problem Statement
Write a program where you will be given a number. You will have to print the factorial of that number.

Input
The input consists of an integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter a number.

Input:
4
Output:
24

*/


    if(input < 0){
        console.log("Factorial can't be negative!")
    } else if(input === 0){
        console.log("Factorial is 1")
    } else{
        let fact = 1;
        for(let i = 1; i <= input; i++){
        fact *= i;
    }
        console.log(fact);
    }
