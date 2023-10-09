
document.getElementById('btn-calculate').addEventListener('click',function(){
    const incomeField =  getInputFieldValueById('income-field');
    if(isNaN(incomeField)){
        alert('Enter a Valid Income Amount');
        return;
    }
    const foodField =  getInputFieldValueById('food-field');
    if(isNaN(foodField)){
        alert('Enter a Valid Food Amount');
        return;
    }
    const rentField =  getInputFieldValueById('rent-field');
    if(isNaN(rentField)){
        alert('Enter a Valid Rent Amount');
        return;
    }
    const clothesField =  getInputFieldValueById('clothes-field');
    if(isNaN(clothesField)){
        alert('Enter a Valid Clothes Amount');
        return;
    }
    let prevExpenseField = getTextElementValueById('total-expense-field');
    let prevBalanceField = getTextElementValueById('balance-field');
    prevExpenseField = 0;
    prevBalanceField = 0 ;
    const totalExpense = foodField+rentField+clothesField;
    let totalExpenseField = (totalExpense + prevExpenseField).toFixed(2);
    const balanceField = (incomeField - totalExpense) ;
    let newBalanceField = (prevBalanceField + balanceField).toFixed(2);
    // console.log(totalExpenseField);
    // const newBalanceField = prevBalanceField + balanceField
    // console.log(balanceField);
    setTextElementValueById('total-expense-field',totalExpenseField);
    setTextElementValueById('balance-field',newBalanceField);
    // prevExpenseField = 0;
    // prevBalanceField = 0 ;
    totalExpenseField = 0;
    newBalanceField = 0;
    // setTextElementValueById2('balance-field',newBalanceField);

})

document.getElementById('btn-save').addEventListener('click',function(){
    const saveField = getInputFieldValueById('save-field');
    if(isNaN(saveField)){
        alert('Enter a Valid Percentage Amount');
        return;
    }
    const newBalanceField = getTextElementValueById('balance-field')
    const savingAmountField = (newBalanceField*(saveField/100)).toFixed(2);
    const remainingBalanceField = (newBalanceField - savingAmountField).toFixed(2);
    setTextElementValueById('saving-amount',savingAmountField);
    setTextElementValueById('rem-balance',remainingBalanceField);
    // console.log(savingAmountField,remainingBalanceField);
})
