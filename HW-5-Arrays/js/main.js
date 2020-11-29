const getRandomArray = (length = 15, min = 1, max = 100) => {
    const resultArr = [];
    for(let i = 0; i < length; i++){
        const randomValue = parseInt(Math.random() * (max - min) + min);
        resultArr.push(randomValue);
    }
    return resultArr;
}

const workArr = getRandomArray();

const getMode = (numbers) => {
    const resultArr = [];
    numbers.forEach((number) => {
        const dublicateArr = numbers.filter(numberEl => number === numberEl);
        if(dublicateArr.length > 1 && !resultArr.includes(number)){
            resultArr.push(dublicateArr[0]);
        }
    })
    return resultArr;
}
const getAverage = (numbers) => {
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total / numbers.length;
}

const getMedian = (numbers) => {
    const numbersCopy = [...numbers].sort((a, b) => +a - +b);
    const evenResult = numbersCopy.length % 2;
    let middleIndex = 0;
    let median = 0;
    if(evenResult === 0){
        middleIndex = numbersCopy.length / 2;
        median = (numbersCopy[middleIndex] + numbersCopy[middleIndex - 1]) / 2;
    } else {
        middleIndex = (numbersCopy.length - evenResult) / 2;
        median = numbersCopy[middleIndex];
    }
    console.log(numbersCopy);
    return median;
}

const filterEvenNumbers = (numbers) => {
    return numbers.filter((number) => number % 2 !== 0);
}

const countPositiveNumbers = (numbers) => {
    const randomNegativeNumbers = (numbersArr) => {
        const negativeResults = [];
        numbersArr.forEach((number, index) => {
            negativeResults.push(index % 3 !== 0 ? number : number * (-1));
        });
        return negativeResults;
    }
    const results = randomNegativeNumbers(numbers);
    console.log(results);
    return results;
}
const getDividedByFive = (numbers) => {
    const divideNumber = 5;
    return numbers.filter(number => number % divideNumber === 0);
}

const badWords = ["shit", "fuck"];

const replaceBadWords = (string) => {
    let correctStr = [...string].join("");
    badWords.forEach(word => {
        const newWord = word.split("").map(char => "*").join("");
        correctStr = correctStr.replace(word, newWord);
    });
    return correctStr;
}

const divideByThree = (word) => {
    const clearWord = word.replace(/[^\w\s]|_/g, "").toLowerCase();
    const strWithoutSpace = clearWord.split("").filter(char => char !== " ");
    const result = [];
    const syllable = strWithoutSpace.reduce((total, char) => {
        if(total.length === 3){
            result.push(total);
            return char;
        }
        return total + char;
    }, "");
    result.push(syllable);
    return result;
}

const generateCombinations = (word) => {
    if(word.length > 10) return [];
    const clearArr = [...new Set(word)];
    const fuctorialCount = clearArr.length > 2 ? (word.length - 1) * word.length : word.length;
    const results = [word.toLowerCase()];
    if(word.length === word.split("").filter(char => char === word[0]).length) return results;
    while(results.length !== fuctorialCount){
        const wordArr = word.toLowerCase().split("");
        let newWord = "";
        while(newWord.length !== word.length){
            const randomItem = wordArr[Math.floor(Math.random() * wordArr.length)];
            const dublicateCount = wordArr.filter(char => randomItem === char).length;
            const existDublicateCount = newWord.split("").filter(char => randomItem === char).length
            if(dublicateCount !== existDublicateCount){
                newWord = newWord + randomItem;
            }
        }
        if(!results.includes(newWord)){
            results.push(newWord);
        }
    }
    return results;
}

console.log(workArr);
console.log(getMode(workArr));
console.log(getAverage(workArr));
console.log(getMedian(workArr));
console.log(filterEvenNumbers(workArr));
console.log(countPositiveNumbers(workArr));
console.log(getDividedByFive(workArr));
console.log(replaceBadWords("Are you fucking kidding?"));
console.log(divideByThree("Are you fucking kidding"));
console.log(generateCombinations("man"));