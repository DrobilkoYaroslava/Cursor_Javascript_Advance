const plusBtnAn = document.querySelector('.btn-pl');
const minusBtnAn = document.querySelector('.btn-min');
const idNumbBtnAn = document.querySelector('.btn-id-num');
const idStrBtnAn = document.querySelector('.btn-id-str');

plusBtnAn.addEventListener('click', animateBtn);
minusBtnAn.addEventListener('click', animateBtn);
idNumbBtnAn.addEventListener('click', animateIdBtn);
idStrBtnAn.addEventListener('click', animateIdBtn);

function animateBtn(e){
    e.target.classList.add('animate');
    setTimeout(() => {
    e.target.classList.remove('animate');
    },500);
}
function animateIdBtn(e){
    
    setTimeout(()=> {
        e.target.classList.add('active');
        e.target.classList.add('loader');
    }, 125);
    setTimeout(()=> {
        e.target.classList.remove('loader');
        e.target.classList.remove('active');
        e.target.classList.add('success');
        e.target.innerText = 'Success';
    }, 1600);
    setTimeout(()=> {
        e.target.classList.remove('success');
        e.target.innerText = 'Try more';
    }, 2900);
}