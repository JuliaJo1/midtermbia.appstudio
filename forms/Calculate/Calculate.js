 
 /*Has a function named calcAvgSquare that can calculate the average of 3 numbers times the square of the first number. The formula is: 
       ((num1 + num2 + num3)/3) * num12*/
 
 
 function calcAvgSquare (num1,num2,num3){
    return((num1+num2+num3)/3)* (num1*num1)
}

/*Gets 3 numbers from the user in the main program (not in the function). 
Function parameter names and the argument names (used in main program when calling the function) CANNOT be the same. */
  


let num1 = Number(prompt("Enter the first number."))
let num2 = Number(prompt("Enter the second number."))
let num3 = Number(prompt("Enter the third number."))

  let answer = calcAvgSquare(num1,num2,num3)
      alert(`The calculated average squared is ${answer}`)

