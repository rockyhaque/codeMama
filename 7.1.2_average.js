/*
#Three Number Average

Write a program that finds the average of three numbers entered by the user.

Input
The input consists of 3 floats.

Output
Output will be a float number.

Constraints
1.2E-38 ≤ |S| ≤ 3.4E+38

The program should print the number with exactly two decimal points.

Example:
Enter three numbers

Input:
10 20 30

Output:
Average: 20.00

*/


function main (input) {
    const data = input.split(" ");
    let sum = 0;

    for(let i = 0; i < data.length; i++){
        const item = Number(data[i])
        sum += item;
    }
    
    let avg = sum / data.length;
    console.log("Average:", avg.toFixed(2))
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
