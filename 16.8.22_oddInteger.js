/*
Find the Odd Integer


Problem Statement
Write a program to create a function that takes an array and finds the integer which appears an odd number of times.

Input
The program will take input until encounters a new line.

Output
The output will be an integer.

Constraints
0 ≤ |S| ≤ 104
Example:
Enter numbers

Input:
1 1 2 -2 5 2 4 4 -1 -2 5

Output:
-1 

*/


// using object
const data = input.split(" ");
    const checkingObj = {}
    for(let i = 0; i < data.length; i++){
        const item = data[i];
        if(checkingObj[item]){
            checkingObj[item]++;
        }else{
            checkingObj[item] = 1;
        }
    }
    // console.log(checkingObj)
    Object.entries(checkingObj).forEach(([key, value]) => {
        // console.log(`${key}: ${value}`)
        if(value % 2 != 0){
            console.log(key)
        }
    })


// using Map

/*
const data = input.split(" ");

    const checkingObj = new Map();

    for(let i = 0; i < data.length; i++){
        const item = data[i];
        if(checkingObj.get(item)){
            
            checkingObj.set(item, checkingObj.get(item) + 1)
        }else{
            checkingObj.set(item, 1)
        }
    }
    
    
    for(let [key, value] of checkingObj){
        if(value % 2 != 0){
            console.log(key)
        }
    }
*/
