const inputs = document.querySelectorAll('.audio-input');
const labels = document.querySelectorAll('LABEL');
const buttons = document.querySelectorAll('.audio-wrapper');
const audioBox = document.querySelectorAll('.audio-box');
const audioInfoBlock = document.querySelectorAll('.audio-info');
const audioEl = document.querySelector('.audio-playing');
const audioResults = document.querySelectorAll('.audio-result');
const objects = [new AudioBox()];
let activeButton = "";

function objectsInit() {
    buttons.forEach((value) => {
        const objc = new AudioBox(value.id, convertIDToKey(value.id), mediaForId(value.id), "", "Yeah! You are right!&nbsp;&nbsp;🥳&nbsp;😍", "Ohh so sorry! You lose&nbsp;&nbsp;😢&nbsp;😕");
        objects.push(objc);
    });
    objects.shift();
    objects[0].answerID = '2';
    objects[1].answerID = '3';
    objects[2].answerID = '8';
    objects[3].answerID = '10';
    objects[4].answerID = '13';
    objects[5].answerID = '17';
    objects[6].answerID = '18';
    objects[7].answerID = '22';
    objects[8].answerID = '26';
    objects[9].answerID = '27';
    objects[10].answerID = '32';
    objects[11].answerID = '34';
}

function convertIDToKey(id) {
    switch(id){
        case "0":
            return "a";
        case "1":
            return "s";
        case "2":
            return "d";
        case "3":
            return "f";
        case "4":
            return "g";
        case "5":
            return "h";
        case "6":
            return "j";
        case "7":
            return "k";
        case "8":
            return "l";
        case "9":
            return "z";
        case "10":
            return "x";
        case "11":
            return "c";
        default:
            return null;
    }
}

function mediaForId(id) {
    switch(id){
        case "0":
            return  "audio/Another Brick in the Wall - Pink Floyd from backingtracks (mp3cut.net).mp3";
        case "1":
            return "audio/Billie Jean - Michael Jackson from backingtracks.co (mp3cut.net).mp3";
        case "2":
            return "audio/Imagine (Original) - John Lennon from backingtracks.co (mp3cut.net).mp3";
        case "3":
            return "audio/In The End (Original Instrumental) - Linkin Park from backingtracks.co (mp3cut.net).mp3";
        case "4":
            return "audio/Its My Life - Bon Jovi from backingtracks.co (mp3cut.net).mp3";
        case "5":
            return "audio/Jailhouse Rock - Elvis Presley from backingtracks.co (mp3cut.net).mp3";
        case "6":
            return "audio/Mein Herz Brennt - Rammstein from backingtracks.co (mp3cut.net).mp3";
        case "7":
            return "audio/Nothing Else Matters (Instrumental) - Metallica from backingtracks.co (mp3cut.net).mp3";
        case "8":
            return "audio/Show must go on - Queen from backingtracks.co (mp3cut.net).mp3";
        case "9":
            return "audio/Smells Like Teen Spirit - Nirvana from backingtracks.co (mp3cut.net).mp3";
        case "10":
            return "audio/Sweet Dreams - Eurythmics from backingtracks.co (mp3cut.net).mp3";
        case "11":
            return "audio/Wind Of Change - Scorpions from backingtracks.co (mp3cut.net).mp3";
        default:
            return null;
    }
}

function addId(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].setAttribute('id', i);
    }
    for(let i = 0; i < labels.length; i++){
        labels[i].setAttribute('for', i);
    }
    for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('id', i);
    }
}

addId();
objectsInit()

function addEvents() {
    document.addEventListener('keydown', function (event) {
        const char = event.key.toLowerCase();
        const existObject = objects.filter((el) => el.char === char);
        if(existObject.length === 0){
            audioEl.pause();
            return;
        }

        if(activeButton === char){
            didPlay(audioEl, audioEl.paused, audioEl.src);
            return
        }
        activeButton = char;
        const result = objects.find(function(objc) {
            return objc.getChar() === char;
        });
        didPlay(audioEl, null, result.audioURL);
    });

    buttons.forEach((div) => {
        div.addEventListener('click', function (event) {
            const activeObjc = objects.find(function(objc){
                return objc.id === event.target.id;
            });
            didPlay(audioEl, null, activeObjc.audioURL);
        });
    })
    
    inputs.forEach((radio) => {
        radio.addEventListener('click', function (event) {
            const parent = event.target.parentNode.parentNode.parentNode;
            const id = parent.id.replace("box", "");
            const currentObjc = objects.find(function(objc){
                return objc.id === id;
            });
            const index = objects.indexOf(currentObjc);
            displayAnswer(currentObjc, index, currentObjc.answerID === event.target.id);
        });
    })   
}

function displayAnswer(objc = new AudioBox(), index, isWin){
    const audioInfo = audioInfoBlock[index]; 
    audioInfo.style.display = "block";
    audioResults[index].innerHTML = `${isWin ? objc.trueAnsw : objc.falseAnsw}`;
}

function didPlay(audio, isPause, src){

    if (isPause === null) {
        audio.setAttribute("src", src);
        audio.play();
        return;
    }
    isPause ? audio.play() : audio.pause();
}
addEvents();