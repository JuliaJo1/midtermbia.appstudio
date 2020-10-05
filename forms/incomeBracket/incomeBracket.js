btnSubmit.onclick=function(){
  let income = inptEnterIncome.value
  
  /*Used this format for output into a control using a template literal.
    Example: say the user input:  100000. The output would be:
             "With your income of $100000, you are in a tax bracket of 25%"*/
  
  let bracket = `With your income of $${income}, you are in a tax bracket of `
    if (income < 30000) {
    
    
   lblTaxBracket.value = bracket + '8%'
     } else if (income < 99999 && income >= 30000) {
   lblTaxBracket.value = bracket + '15%'
    } else if (income >= 99999) {
   lblTaxBracket.value = bracket + '25%'
  }
  
  
}
btnGoAgain.onclick=function(){
  lblTaxBracket.value = "Enter a different income amount"
}