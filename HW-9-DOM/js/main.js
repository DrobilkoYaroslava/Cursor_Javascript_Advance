const blockWrapp = document.querySelector('#main-container');
let blockArr = [];
let isStart = true; 
const QUANTITY_EL = 25;
const WRAPP_WIDTH = '250px';
const SIZE_EL = '50px';
const DELAY = 1000;

function generateBlocks() {
    blockWrapp.innerHTML = '<div></div>'.repeat(QUANTITY_EL);
    blockArr = document.querySelectorAll('div');
}

function generateSize() {
    blockWrapp.style.width = WRAPP_WIDTH;
    blockArr.forEach(block => {
        block.style.width = SIZE_EL;
        block.style.height = SIZE_EL;
    });
}

function generateBlocksRandomColor(){
    blockArr.forEach(block => {
        block.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
    });
}

function generateBlocksInterval() {
    return  setInterval(generateBlocksRandomColor, DELAY);
}

let timerId = generateBlocksInterval();

generateBlocks();
generateSize();
generateBlocksRandomColor();

blockWrapp.addEventListener('click', () => {
    if(isStart){
        clearInterval(timerId);
    } else{
        timerId = generateBlocksInterval();
    }
    isStart = !isStart;
})