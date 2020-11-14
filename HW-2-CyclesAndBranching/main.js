const startNumber = document.querySelector("#start-number");
const finishNumber = document.querySelector("#finish-number");
const result = document.querySelector("#calculation-result");
let isEven = true;

function calculationAction(){
    let isNumber = numberValidation(startNumber.value, finishNumber.value); 
    if (isNumber === true){
        let startInt = parseInt(startNumber.value);
        let finishInt = parseInt(finishNumber.value);
        let sum = getSum(startInt, finishInt, isEven);
        displayResult(sum);
    }
}
function getSum(startNumber, finishNumber, isEven){
    let sum = 0;
    if (startNumber > finishNumber){
        alert(`Початкове число має бути менше від ${finishNumber}`);
        return sum;
    }
    for(let i = startNumber; i <= finishNumber; i++){
        switch(i % 2){
            case 0:
                if (isEven === true){
                    sum = sum + i;
                }
            break;
            default:
                sum = sum + i;
            break;
        }
    }
    return sum;
}
function displayResult(text){
    result.innerHTML = `${text}`;
}
function radioBtnAction(){
    let radioBtnArray = document.querySelectorAll(".calculation__checkbox");
    radioBtnArray.forEach(element => element.checked = false);
    
    let activeRadioBtn = event.target;
    isEven = parseInt(activeRadioBtn.value) === 1;
    activeRadioBtn.checked = true;
}
function numberValidation(startNumber, finishNumber){
    if(startNumber === "" || finishNumber === ""){
        alert(`Введіть числа!`);
        return false;
    }
    if (!Number.isInteger(parseFloat(startNumber))){
        alert(`${startNumber} - Це не ціле число!`);
        return false; 
    }
    if (!Number.isInteger(parseFloat(finishNumber))){
        alert(`${finishNumber} - Це не ціле число!`);
        return false; 
    }
    return true;
}