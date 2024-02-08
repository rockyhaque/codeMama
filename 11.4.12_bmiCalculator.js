/*
BMI Calculator

Problem Statement
Write a program where user will give height(height) and weight(kg) and then BMI will be calculated.

Input
The input consists of two double numbers which are height(meter) and weight(kg).

Output
*if bmi < 18.5 print "Underweight" *if bmi >= 18.5 & bmi < 25.0 print "Normal weight" *if bmi >= 25.0 & bmi < 30.0 print "Overweight" *else print "Obese"

Constraints
0 ≤ |S| ≤ 109
Example:
Enter height and weight.

Input:
1.6 60

Output:
BMI: 23.44
Normal weight

*/


    const data = input.split(" ");
    const numbers = data.map(element => Number(element))

    const height = numbers[0]
    const weight = numbers[1]
    
    const bmi = weight / Math.pow(height, 2);
    console.log("BMI: ", bmi.toFixed(2))

    if(bmi < 18.5){
        console.log("Underweight")
    } else if(bmi >= 18.5 && bmi < 25.0){
        console.log("Normal weight")
    } else if(bmi >= 25.0 & bmi < 30.0){
        console.log("Overweight")
    } else{
        console.log("Obese")
    }
