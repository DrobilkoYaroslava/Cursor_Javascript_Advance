const byline = document.querySelector('#byline');  
const bylineText = byline.innerHTML;                   
const bylineArr = bylineText.split(''); 
const wrapper = document.querySelector('.wrapper');
byline.innerHTML = ''; 

for(i = 0; i < bylineArr.length; i++){                  
    const span = document.createElement("span");          
    const letter = document.createTextNode(bylineArr[i]); 
    if(bylineArr[i] == ' ') {    
        byline.appendChild(letter); 
    } else {
        span.appendChild(letter);
        byline.appendChild(span); 
    }
}

document.body.onload = () => {
    setTimeout(() => {
        const preloader = document.querySelector('#preloader-id');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
            wrapper.style.display = "block";
        }
    }, 6500);
}
