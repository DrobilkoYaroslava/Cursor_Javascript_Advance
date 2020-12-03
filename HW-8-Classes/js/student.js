class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
    }
    get getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
    get getMarks() {
        return this.marks;
    }
    set setMark(mark){
        if(this.marks) this.marks.push(mark);
    }
    get getAverageMark(){
        return this.marks.reduce((total, mark) => {
            return total + mark;
        }, 0) / this.marks.length; 
    }
    dismiss(){
        this.marks = null;
    }
    recover(){
        this.marks = [];
    }
}

class BudgetStudent extends Student{
    constructor(university, course, fullName, scholarship, marks){
        super(university, course, fullName);
        this.marks = marks;
        this.scholarship = scholarship;
        this.runTimer(this);
    }
    get getScholarship(){
        if(this.getAverageMark >= 4 && this.marks){
            return this.scholarship;
        }
        return null;
    }
    runTimer(student, delay = 30000){
        const scholarship = student.getScholarship;
        this.timer = setTimeout(function loop(){ 
            if(scholarship){
                console.log(`Ви отримали ${scholarship} грн. стипендії`);
                this.timer = setTimeout(loop, delay);
            }
        }, delay);
    }
    dismiss(){
        super.dismiss();
        clearTimeout(this.timer);
        console.log(`Цей студент виключений`);
    }
}