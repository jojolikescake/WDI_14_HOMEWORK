var savingsBalance = document.querySelector('span');
var savingsInput = document.querySelector('.savingsInput')
var savingsWithdraw = document.querySelector('.savingsWithdraw')

var savingsDeposit = document.querySelector('.savingsDeposit')

function depositSavings(){
  savingsBalance.textContent = Number(savingsBalance.textContent)+ Number(savingsInput.value);
}

function withdrawSavings(){
  savingsBalance.textContent = Number(savingsBalance.textContent)-Number(savingsInput.value);
}

savingsWithdraw.addEventListener('click', withdrawSavings)
savingsDeposit.addEventListener('click', depositSavings)

var checkingBalance = document.querySelectorAll('span')[1];
var checkingInput = document.querySelector('.checkingInput');
var checkingWithdraw = document.querySelector('.checkingWithdraw');
var checkingDeposit = document.querySelector('.checkingDeposit');

function withdrawChecking (){
  checkingBalance.textContent = Number(checkingBalance.textContent)-Number(checkingInput.value);
}

function depositChecking (){
  checkingBalance.textContent = Number(checkingBalance.textContent)+ Number(checkingInput.value);
}

checkingDeposit.addEventListener('click', depositChecking)
checkingWithdraw.addEventListener('click', withdrawChecking)