class Group{

    constructor(boy = new Student(), girl = new Student(), theme = ""){
        this.boy = boy;
        this.girl = girl;
        this.theme = theme;
        this.mark = parseInt(Math.random() * (5 - 1) + 1);
    }
    generateGroupName(){
        return `${this.boy.name} і ${this.girl.name}`;
    }
    get getGroupName(){
        return this.generateGroupName;
    }
}