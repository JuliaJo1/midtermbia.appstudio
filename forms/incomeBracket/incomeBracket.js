btnSubmit.onclick=function(){
  let income = inptEnterIncome.value
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