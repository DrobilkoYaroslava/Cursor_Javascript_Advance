const buttonsArray = document.querySelectorAll(".function__btn");
const resultsArray = document.querySelectorAll(".function__result");
const kTryAgain = `try again`;

function checkData(numberArr, errorMsg){
    let isValid = true;
    for(let i = 0; i < numberArr.length; i++){
        const numberStr = +numberArr[i];
        if(!Number.isInteger(numberStr)){
            alert(errorMsg);
            isValid = false;
            if(!isValid){
                break;
            }
        }
    }
    return isValid; 
}
function getMaxDigit(numberStr){
    if(!checkData([numberStr], `Введіть тільки числа!`)){
        return kTryAgain;
    } 
    const charArray = numberStr.split("");
    let maxValue = 0;
    charArray.forEach(function(char){
        if(maxValue < parseInt(char)){
            maxValue = parseInt(char);
        }
    });
    return maxValue;
}
function raiseToPower(numberEl, numberPow){
    let result = 1;
    let increaseArr = [];
    if(!checkData([numberEl, numberPow], `Введіть числа!`)){
        return kTryAgain;
    } 
    if(!+numberPow) return result;
    const isPositivePow = parseInt(numberPow) > 0;
    for(let i = 0; i < Math.abs(numberPow); i++){
        increaseArr.push(+numberEl);
    }
    increaseArr.forEach(function(numb){
        result = result * numb;
    });
    if(isPositivePow){
        return result;
    } else{
        return 1 / result; 
    }
}
function formatName(nameStr){
    if(regularNumberExpression.test(nameStr)){
        alert(`Введіть ім'я!`);
        return `try again`;
    } 
    if(!nameStr){
        alert(`Введіть ім'я!`);
        return `try again`;
    } 
    return nameStr[0].toUpperCase() + nameStr.slice(1).toLowerCase();
}
function calculateTax(salary, tax){
    if(!checkData([salary], `Введіть тільки числа!`)){
        return kTryAgain;
    }
    const calcFinalSalary = salary - (salary / 100 * tax);
    return `${calcFinalSalary} грн.`;
}
function getRandomNumber(numberStart, numberFinish){
    if(!checkData([numberStart, numberFinish], `Введіть тільки цілі числа!`)){
        return kTryAgain;
    } 
    const numberStartPoint = Math.ceil(numberStart);
    const numberFinishPoint = Math.floor(numberFinish);
    const randomNumber = Math.floor(Math.random() * (numberFinishPoint - numberStartPoint + 1)) + numberStartPoint;
    return randomNumber;
}
function countLetterRepeat(word, letter){
    let resultCount = 0;
    for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) resultCount++;
    }
    return resultCount;
}
function convertCurrency (userSum){
    const rateUsdBuy = 28.36;
    const rateUsdSale= 28.08;
    let convertResult = " ";
    if(userSum.toLowerCase().includes("uah")){
        convertResult = "$" + " " + (userSum.toLowerCase().split("uah")[0] / rateUsdBuy).toFixed(2);
    } else if(userSum.includes("$")){
            convertResult = (userSum.split("$")[0] * rateUsdSale).toFixed(2) + " " + "uah";
    } else{
        alert("Error! Введіть суму в $ або uah!");
        convertResult = "try again";
    }
    return convertResult;
}
function getRandomPassword(userPassword = 8){
    if(!checkData([userPassword], `Введіть тільки ціле число!`)){
        return kTryAgain;
    }
    let password = "";
    let symbols = "0123456789";
    if (userPassword === '0') userPassword = 8;
    for (let i = 0; i < userPassword; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}
function deleteLetters(sentence, userLetter){
    return sentence.split(userLetter).join("");
}
function isPalindrome(palindrome = ""){
    const palindromReverseWord = palindrome.split('').reverse().join('');
    return palindromReverseWord.split(" ").join("").toLowerCase() === palindrome.split(" ").join("").toLowerCase();
}
function deleteDuplicateLetter(duplicateLetter){
    const convertDublicateLetter = duplicateLetter.toLowerCase().split(" ").join("").split("");
    const withoutDublicateArr = [...new Set(convertDublicateLetter)];
    const dublicateArr = convertDublicateLetter.filter((element, index, a) => a.indexOf(element) !== index);
    let result = [...withoutDublicateArr];
    dublicateArr.forEach(function(element){
        const index = result.indexOf(element);
        if (index > -1){
            result.splice(index,1);
        }
    });
    return result.join("");
}

buttonsArray.forEach(function(btn, index){
    btn.setAttribute("id", `${index}`);
});

buttonsArray.forEach(btn => btn.onclick = function(){
    switch(this.id){
        case "0" : 
            const numberStr = prompt("Введіть будь-яке число, наприклад '25982!");
            resultsArray[0].innerHTML = `Результат: ${getMaxDigit(numberStr)}`;
        break;
        case "1" :
            const numberEl = prompt("Введіть будь-яке число!");
            const numberPow = prompt("Введіть до якого ступеня!");
            resultsArray[1].innerHTML = `Результат: ${raiseToPower(numberEl, numberPow)}`;
        break;
        case "2" : 
            const nameStr = prompt("Напишіть ім'я з маленької букви!");
            resultsArray[2].innerHTML = `Результат: ${formatName(nameStr)}`;
        break;
        case "3" : 
            const salary = prompt("Заробітна плата");
            const tax = 18 + 1.5;
            resultsArray[3].innerHTML = `Результат: ${calculateTax(salary, tax)}`;
        break;
        case "4" : 
            const numberStart = prompt("Введіть перше число діапазону");
            const numberFinish = prompt("Введіть останнє число діапазону");
            resultsArray[4].innerHTML = `Результат: ${getRandomNumber(numberStart, numberFinish)}`;
        break;
        case "5" : 
            const word = prompt("Введіть слово");
            const letter = prompt("Введіть букву");
            resultsArray[5].innerHTML = `Результат: ${countLetterRepeat(word, letter)}`;
        break;
        case "6" : 
            const userSum = prompt("Введіть суму в $ або uah (Наприклад: 500$; 200uah)");
            resultsArray[6].innerHTML = `Результат: ${convertCurrency (userSum)}`;
        break;
        case "7" : 
            let userPassword = prompt("Нажміть Enter для генерації рандомного пароля (8 символів за замовчуванням), або введіть потрібну кількість символів", "8");
            resultsArray[7].innerHTML = `Результат: ${getRandomPassword(userPassword)}`;
        break;
        case "8" : 
            const sentence = prompt("Введіть будь-яке речення");
            const userLetter = prompt("Введіть букву, яку бажаєте видалити");
            resultsArray[8].innerHTML = `Результат: ${deleteLetters(sentence, userLetter)}`;
        break;
        case "9" : 
            const palindrome = prompt("Введіть слово");
            resultsArray[9].innerHTML = `Результат: ${isPalindrome(palindrome) ? 'це паліндром' : 'це не паліндром'}`;
        break;
        default: 
            const duplicateLetter = prompt("Введіть речення");
            resultsArray[10].innerHTML = `Результат: ${deleteDuplicateLetter(duplicateLetter)}`;
        break;
    }
})