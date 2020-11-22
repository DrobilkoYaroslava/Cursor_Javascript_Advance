class Student{
    constructor(name = "", sex = 0, mark = 1){
        this.name = name;
        this.sex = sex;
        this.mark = mark;
    }
    get getStudentMark(){
        return `${this.name} - ${this.mark}`;
    }
}