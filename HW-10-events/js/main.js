const inputs = document.querySelectorAll('.author');


function addId(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].setAttribute('id', i);
    }
}
addId();