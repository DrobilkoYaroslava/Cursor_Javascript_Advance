const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Бендер");
const marks = [5, 4, 4, 5];
const budgetStudent = new BudgetStudent("Вищої Школи Психотерапії м.Одеса", 1, "Остап Бендер", 1400, marks); 

marks.forEach((mark) => {
    student.setMark = mark;
});

console.log(student.getInfo);
console.log(student.getMarks);
console.log(student.getAverageMark);
student.dismiss();
student.setMark = 5;
console.log(student.getMarks);
student.recover();
student.setMark = 4;
console.log(student.getMarks);

// budgetStudent.dismiss();

