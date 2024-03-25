/*
Rectangle in Circle

Problem Statement
Write a program to create a function that takes three numbers — the width and height of a rectangle, and the radius of a circle — and returns true if the rectangle can fit inside the circle, false if it can't.

Input
The input consists of three double numbers: width, height, radius

Output
The output will print either "true" or "false"

Constraints
0 ≤ |S| ≤ 104
Example:
Enter numbers

Input:
8 6 5

Output:
true

*/

    const data = input.split(" ");
    const width = Number(data[0]);
    const height = Number(data[1]);
    const radius = Number(data[2]);

    const diameter = 2 * radius;
    const diagonal = Math.sqrt(height * height + width * width)
    
    // if(diagonal > diameter){
    //     console.log(false)
    // }else{
    //     console.log(true)
    // }

    // without if else
    console.log(diagonal <= diameter);
