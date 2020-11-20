const buttonArray = document.querySelectorAll(".function__btn");
const resultArray = document.querySelectorAll(".function__result");

function getMaxDigit(numberStr){
    if(!/^[0-9]+$/.test(numberStr)){
        alert(`Введіть тільки числа!`);
        return `try again`;
    } 
    const charArray = numberStr.split("");
    let numberArray = [];
    charArray.forEach(function(char){
        numberArray.push(parseInt(char));
    });
    const maxDigit = Math.max(...numberArray.filter(element => !Number.isNaN(element)));
    return maxDigit;
}
function raiseToPower(numberEl, numberPow){
    let result = numberEl;
    if(!/^[0-9]+$/.test(numberEl) || !/^[0-9]+$/.test(numberPow)){
        alert(`Введіть числа!`);
        return `try again`;
    }
    for (let i = 1; i < numberPow; i++){
        result = result * numberEl;
    }
    return result;
}
function formatName(nameStr){
    if(/^[0-9]+$/.test(nameStr)){
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
    if(!/^[0-9]+$/.test(salary)){
        alert(`Введіть тільки числа!`);
        return `try again`;
    } 
    const calcFinalSalary = salary - (salary / 100 * tax);
    return `${calcFinalSalary} грн.`;
}
function getRandomNumber(numberStart, numberFinish){
    if(!/^[0-9]+$/.test(numberStart) || !/^[0-9]+$/.test(numberFinish)){
        alert(`Введіть тільки цілі числа!`);
        return `try again`;
    } 
    numberStart = Math.ceil(numberStart);
    numberFinish = Math.floor(numberFinish);
    const randomNumber = Math.floor(Math.random() * (numberFinish - numberStart + 1)) + numberStart;
    return randomNumber;
}
function countLetterRepeat(word, letter){
    let resultCount = 0;
    for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) resultCount++;
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
function getRandomPassword(userPassword){
    let password = "";
    let symbols = "0123456789";
    if(!/^[0-9]+$/.test(userPassword)){
        alert(`Введіть тільки число!`);
        return `try again`;
    } 
    if (userPassword === 0) userPassword = 8;
    for (let i = 0; i < userPassword; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}
function deleteLetters(sentence, userLetter){
    return sentence.split(userLetter).join("");
}
function isPalindrome(palindrome = ""){
    let value = "";
    for (let i = palindrome.length - 1; i >= 0; i--){
        value = value + palindrome[i];
    }
    return value.split(" ").join("").toLowerCase() === palindrome.split(" ").join("").toLowerCase();
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
    // let unique = "";
    // for(let i = 0; i < convertDublicateLetter.length; i++){
    //     if(convertDublicateLetter.lastIndexOf(convertDublicateLetter[i]) == convertDublicateLetter.indexOf(convertDublicateLetter[i])){
    //         unique += convertDublicateLetter[i];
    //     }
    // }
    // return unique;
}

buttonArray.forEach(function(btn, index){
    btn.setAttribute("id", `${index}`);
});

buttonArray.forEach(btn => btn.onclick = function(){
    switch(this.id){
        case "0" : 
            const numberStr = prompt("Введіть будь-яке число!");
            resultArray[0].innerHTML = `Результат: ${getMaxDigit(numberStr)}`;
        break;
        case "1" :
            const numberEl = prompt("Введіть будь-яке число!");
            const numberPow = prompt("Введіть до якого ступеня!");
            resultArray[1].innerHTML = `Результат: ${raiseToPower(numberEl, numberPow)}`;
        break;
        case "2" : 
            const nameStr = prompt("Напишіть ім'я з маленької букви!");
            resultArray[2].innerHTML = `Результат: ${formatName(nameStr)}`;
        break;
        case "3" : 
            const salary = prompt("Заробітна плата");
            const tax = 18 + 1.5;
            resultArray[3].innerHTML = `Результат: ${calculateTax(salary, tax)}`;
        break;
        case "4" : 
            const numberStart = prompt("Введіть перше число діапазону");
            const numberFinish = prompt("Введіть останнє число діапазону");
            resultArray[4].innerHTML = `Результат: ${getRandomNumber(numberStart, numberFinish)}`;
        break;
        case "5" : 
            const word = prompt("Введіть слово");
            const letter = prompt("Введіть букву");
            resultArray[5].innerHTML = `Результат: ${countLetterRepeat(word, letter)}`;
        break;
        case "6" : 
            const userSum = prompt("Введіть суму в $ або uah (Наприклад: 500$; 200uah)");
            resultArray[6].innerHTML = `Результат: ${convertCurrency (userSum)}`;
        break;
        case "7" : 
            let userPassword = prompt("Нажміть Enter для генерації рандомного пароля (8 символів за замовчуванням), або введіть потрібну кількість символів", "8");
            resultArray[7].innerHTML = `Результат: ${getRandomPassword(userPassword)}`;
        break;
        case "8" : 
            const sentence = prompt("Введіть будь-яке речення");
            const userLetter = prompt("Введіть букву, яку бажаєте видалити");
            resultArray[8].innerHTML = `Результат: ${deleteLetters(sentence, userLetter)}`;
        break;
        case "9" : 
            const palindrome = prompt("Введіть слово");
            resultArray[9].innerHTML = `Результат: ${isPalindrome(palindrome) ? 'це паліндром' : 'це не паліндром'}`;
        break;
        default: 
            const duplicateLetter = prompt("Введіть речення");
            resultArray[10].innerHTML = `Результат: ${deleteDuplicateLetter(duplicateLetter)}`;
        break;
    }
})