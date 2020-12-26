class AudioBox{
    constructor(argsData = {}){
        this.id = argsData.id;
        this.char = argsData.char;
        this.audioURL = argsData.url;
        this.answerID = argsData.answerID;
        this.trueAnsw = argsData.success;
        this.falseAnsw = argsData.failure;
    }
    getChar(){
        return this.char;
    }
}