let blockArr = [];

function generateBlocks(blocks) {
    blockArr = document.body.insertAdjacentHTML('beforeend', '<div id="cont">'+'<div></div>'.repeat(25)+'</div>');
}

function generateSize(blocks) {
    document.querySelector('#cont').style.width = 250 + 'px';
    document.querySelectorAll('#cont>div').forEach(block => {
        block.style.width = 50 + 'px';
    });
    document.querySelectorAll('#cont>div').forEach(block => {
        block.style.height = 50 + 'px';
    });
}

function generateBlocksRandomColor(backgroundColor){
    document.querySelectorAll('#cont>div').forEach(block => {
        block.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
    });
}

function generateBlocksInterval() {
    let timer = setInterval(generateBlocksRandomColor, 1000);
    return timer;
}

generateBlocks();
generateSize();
generateBlocksRandomColor();
generateBlocksInterval();