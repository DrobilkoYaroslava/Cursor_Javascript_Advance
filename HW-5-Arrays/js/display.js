const lengthField = document.querySelector("#length");
const minField = document.querySelector("#min-value");
const maxField = document.querySelector("#max-value");
const badWord = document.querySelector("#bad-word-value");
const divideBySyllable = document.querySelector("#divide-by-syllable-value");
const combinations = document.querySelector("#combinations");
const resultFields = document.querySelectorAll(".function-result");
const functionContainers = document.querySelectorAll(".function");

function clickNumberAction(){
    const mainArr = getRandomArray(lengthField.value, minField.value, maxField.value);
    resultFields[0].innerHTML = mainArr;
    resultFields[1].innerHTML = `${getModa(mainArr).length > 0 ? getModa(mainArr) : 'Немає повторень'}`;
    resultFields[2].innerHTML = getAverage(mainArr);
    resultFields[3].innerHTML = getMedian(mainArr);
    resultFields[4].innerHTML = filterEvenNumbers(mainArr);
    resultFields[5].innerHTML = countPositiveNumbers(mainArr);
    resultFields[6].innerHTML = getDividedByFive(mainArr);
}

function clickBadWordsAction(){
    resultFields[7].innerHTML = replaceBadWords(badWord.value);
}
function clickDivideByThreeAction(){
    resultFields[8].innerHTML = divideByThree(divideBySyllable.value);
}
function clickGenerateCombinationsAction(){
    resultFields[9].innerHTML = generateCombinations(combinations.value);
}
