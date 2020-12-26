const input = document.querySelector('#input');
const pageResult = document.querySelector('.chinese-symbols');
const pageBtn = document.querySelector('.chinese-symbols-btn');

const DELAY = 50;

async function getRandomChinese(length){
    const promises = [];
    for (let index = 0; index < length; index++) {
        const promiseItem = new Promise((resolve) => { 
            const result = String.fromCharCode(String(Date.now() + index).slice(-5));
            setTimeout(() => resolve(result), DELAY * (index + 1));
        });
        promises.push(promiseItem);
    }
    return Promise.all(promises)
}

function displaySymbols(str){
    pageResult.innerHTML = str;
}

pageBtn.addEventListener('click', () => {
    const length = input.value ? input.value : 4;
    getRandomChinese(length).then((results) => {
        displaySymbols(results.join(""));
    });
});