 
 
 function calcAvgSquare (num1,num2,num3){
    return((num1+num2+num3)/3)*(num1*num1)
}


let num1 = Number(prompt("Enter the first number."))
let num2 = Number(prompt("Enter the second number."))
let num3 = Number(prompt("Enter the third number."))

let answer = calcAvgSquare(num1,num2,num3)
alert(`The calculated average squared is ${answer}`)

