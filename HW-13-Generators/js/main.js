const numberIdBtn = document.querySelector('#number-id-btn');
const stringIdBtn = document.querySelector('#string-id-btn');
const numberIdResult = document.querySelector('#number-id-result');
const stringIdResult = document.querySelector('#string-id-result');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const fontResult = document.querySelectorAll('.font-generator__result-text');
const numberIdGenerator = createNumberIdGenerator();
const stringIdGenerator = createStringIdGenerator();
const fontGenerator = changeFontSize(14);
fontGenerator.next();

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

function* changeFontSize(size) {
    fontResult.forEach(p => p.style.fontSize = size + "px");
    let currentFontSize = parseInt(fontResult[0].style.fontSize);
    while (true) {
        switch(yield){
            case "up":
                currentFontSize += 2;
            break;
            case "down":
                currentFontSize -= 2;
            break;
            default:
                break;
        }
        if(currentFontSize < 8){
            currentFontSize = 8;
        } else if(currentFontSize > 40){
            currentFontSize = 40;
        }
        fontResult.forEach((p) => {p.style.fontSize = `${currentFontSize}px`});
    }
}