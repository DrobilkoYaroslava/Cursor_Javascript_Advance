const numberIdBtn = document.querySelector('#number-id-btn');
const stringIdBtn = document.querySelector('#string-id-btn');
const numberIdResult = document.querySelector('#number-id-result');
const stringIdResult = document.querySelector('#string-id-result');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const fontResult = document.querySelectorAll('.font-generator__result-text');
const numberIdGenerator = createNumberIdGenerator();
const stringIdGenerator = createStringIdGenerator();
const fontGenerator = changeFont(14);
fontGenerator.next();
const fonts = [
    "Comfortaa",
    "EB Garamond",
    "Jura",
    "Lobster",
    "Oswald",
    "Pacifico",
    "Roboto"
];
const colors = [
    "#5b96f5",
    "#9544f2",
    "#ff6370",  
    "#157d20",
    "#fc8e08",
    "#077f8c",
    "#bdbd04",
    "#e309df",
    "#000000"
];

numberIdBtn.addEventListener('click', () => {
    setTimeout(() => {
        numberIdResult.innerHTML = numberIdGenerator.next().value;
    },2000);
});
stringIdBtn.addEventListener('click', () => {
    setTimeout(() => {
    stringIdResult.innerHTML = stringIdGenerator.next().value;
    },2000);
});
plusBtn.addEventListener('click', () => fontGenerator.next("up").value);
minusBtn.addEventListener('click', () => fontGenerator.next("down").value);

function* createNumberIdGenerator(number = Infinity){
    for (let i = 1; i < number; i++){
        yield i;
    }
}
function* createStringIdGenerator(){
    while (true) {
        yield createStringId();
    }
}

function createStringId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (str) => {
      const result = Math.random() * 16 | 0, value = str == 'x' ? result : (result & 0x3 | 0x8);
        return value.toString(16);
    });
}

function* changeFont(size) {
    fontResult.forEach(p => p.style.fontSize = size + "px");
    let currentFontSize = parseInt(fontResult[0].style.fontSize);
    while (true) {
        switch(yield){
            case "up":
                currentFontSize += 2;
                randomColor(0, colors.length);
                randomFontFamily(0, fonts.length);
            break;
            case "down":
                currentFontSize -= 2;
                randomColor(0, colors.length);
                randomFontFamily(0, fonts.length);
            break;
            default:
                break;
        }
        if(currentFontSize < 6){
            currentFontSize = 6;
        } else if(currentFontSize > 40){
            currentFontSize = 40;
        }
        fontResult.forEach((p) => {p.style.fontSize = `${currentFontSize}px`});
    }
}
function randomColor(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    fontResult.forEach((p) => {
        p.style.color = `${colors[random]}`;
    });
}
function randomFontFamily(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    fontResult.forEach((p) => {
        p.style.fontFamily = `${fonts[random]}`;
    });
}