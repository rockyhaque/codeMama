/*
Frame Per Second


Problem Statement
Write a program that returns the number of frames shown in a given number of minutes for a certain FPS. FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

Input
The input consists of two integer number: minute and fps.

Output
The output will print an integers.

Constraints
0 ≤ |S| ≤ 104
Example:
Enter numbers

Input:
10 25

Output:
15000

*/

    const data = input.split(" ");
    const nums = data.map(element => Number(element));
    const minute = nums[0];
    const fps = nums[1];
    let result = 60 * minute * fps;
    console.log(result)
