class AudioBox{
    constructor(id = 0, char = "", audioURL = "", answerID = "", trueAnsw = "", falseAnsw = ""){
        this.id = id;
        this.char = char;
        this.audioURL = audioURL;
        this.answerID = answerID;
        this.trueAnsw = trueAnsw;
        this.falseAnsw = falseAnsw;
    }
    getChar(){
        return this.char;
    }
}