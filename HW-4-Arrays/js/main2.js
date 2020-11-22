const themesArr = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marksArr = [4, 5, 5, 3, 4, 5];
const studentsArr = ["Олександр", "Олена", "Ігор", "Іра", "Олексій", "Світлана"];

function setup(themesArr) {
    let students = [];
    for(let i = 0; i < studentsArr.length; i++){
        const student = new Student(studentsArr[i], i % 2, marksArr[i]);
        students.push(student);
    }
    const boys = students.filter(function (obj) {
        return obj.sex  === 0;
    })
    const girls = students.filter(function (obj) {
        return obj.sex  === 1;
    })
    let groups = [];
    for(let i = 0; i < themesArr.length; i++){
        const group = new Group(boys[i], girls[i], themesArr[i]);
        groups.push(group);
    }

    getPairs(groups);
    getPairsAndThemes(groups);
    getStudentsInfo(students);
    getGroupWithMarks(groups);
}

function getPairs(groups = [Group]) {
    let results = [];
    groups.forEach(function(obj){
        results.push(obj.getGroupName());
    });
    console.log(results);
}

function getPairsAndThemes(groups = [Group]){
    let results = [];
    groups.forEach(function(obj){
        results.push([obj.getGroupName(), obj.theme]);
    });
    console.log(results);
}

function getStudentsInfo(students){
    let results = [];
    students.forEach(function(obj){
        results.push([obj.name, obj.mark]);
    });
    console.log(results);
}

function getGroupWithMarks(groups = [Group]){
    let results = [];
    groups.forEach(function(obj){
        results.push([obj.getGroupName(), obj.theme, obj.mark]);
    });
    console.log(results);
}

setup(themesArr);