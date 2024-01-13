/*
7.1.3 Greater in Three

Write a program that finds the maximum of three numbers entered by the user.

Input
The input consists of 3 integers.

Output
Output the maximum

Constraints
-2 31 ≤ |S| ≤ 231 - 1

Example:
Enter three numbers

Input:
10 20 30

Output:
30

*/


function main (input) {
    const data = input.split(" ");
    const converted = data.map(item => Number(item));
    const sorted = converted.sort(function(a, b){
        return a - b;
    });
    console.log(sorted.pop());
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
