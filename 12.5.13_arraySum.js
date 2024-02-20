/*
Sum of Array Elements


Problem Statement
Write a program where user will give an array of elements. You will have to print the sum of elements where each element will be less than median element.

Input
The input consists of size of the array and the elements of the array. Every input will be unsigned integer number.

Output
The output will be sum of elements that are lesser than median element.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter size of the array and the elements.

Input:
6
30 10 5 40 60 15

Output:
30

*/

    const data = input.split("\n");
    const n = parseInt(data[0])
    const arr = data[1].split(" ");
    const arrNums = arr.map(item => Number(item))

    arrNums.sort((a, b) => a - b)

    let median = -1;
    if(n % 2 == 1){
        median = arrNums[Math.floor(n / 2)]
    } else{
        const mid = Math.floor(n / 2);
        median = (arrNums[mid] + arrNums[mid - 1]) / 2;
    }
    
    let sum = 0;
    for(let i = 0; i < n && arrNums[i] < median; i++){
        sum += arrNums[i]
    }
    console.log(sum)
