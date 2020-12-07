const blockWrapp = document.querySelector('#main-container');
let blockArr = [];
const quantityEl = 25;
const wrappWidth = '250px';
const sizeEl = '50px';
const delay = 1000;

function generateBlocks() {
    blockWrapp.innerHTML = '<div></div>'.repeat(quantityEl);
    blockArr = document.querySelectorAll('div');
}

function generateSize() {
    blockWrapp.style.width = wrappWidth;
    blockArr.forEach(block => {
        block.style.width = sizeEl;
    });
    blockArr.forEach(block => {
        block.style.height = sizeEl;
    });
}

function generateBlocksRandomColor(){
    blockArr.forEach(block => {
        block.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
    });
}

function generateBlocksInterval() {
    let timer = setInterval(generateBlocksRandomColor, delay);
    return timer;
}

generateBlocks();
generateSize();
generateBlocksRandomColor();
generateBlocksInterval();