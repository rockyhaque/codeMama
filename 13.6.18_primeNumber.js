/*
Is the number Prime?


Problem Statement
Write a program where you will be given a number. You will have to check whether the number is prime or not.

Input
The input consists of an integer numbers.

Output
The output will print whether the number is prime or not. For example, for 13 it will print "13 is a prime number." for 24 it will print "24 is not a prime number."

Constraints
0 ≤ |S| ≤ 109
Example:
Enter number.

Input:
13
Output:
13 is a prime number.

*/

    let isPrime = true;
    const num = parseInt(input)
    if(num == 1){
        console.log(`${num} is not a prime number.`)
    } else{
        for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
            break;
            }
        }
        if(isPrime){
            console.log(`${num} is a prime number.`)
        } else{
            console.log(`${num} is not a prime number.`)
        }
    
    }
