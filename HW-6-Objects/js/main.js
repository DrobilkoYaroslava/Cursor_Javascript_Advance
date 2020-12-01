const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
function getSubjectsForStudent(student){
    const subjList = Object.keys(student.subjects);
    return subjList.map((subject) => subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace("_", " "));
}

function getAverageMark(student){
    const subjList = Object.keys(student.subjects);
    const total = subjList.reduce((total, key) => {
        return total + getAverage(student.subjects[key]);
    }, 0);
    return total / subjList.length;
}

const getAverage = (numbers) => {
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total / numbers.length;
}

function getStudentInfo(student){
    const resultObj = {}
    resultObj["course"] = student.course;
    resultObj["name"] = student.name;
    resultObj["averageMark"] = getAverageMark(student).toFixed(2);
    return resultObj;
}

function getStudentsNames(students){
    return students.map(student => student.name).sort();
}

function getBestStudent(students){
    return students.sort((a, b) => {
        return getAverageMark(a) - getAverageMark(b);
    })[students.length - 1].name;
}

function calculateWordLetters(word){
    const resultObj = {};
    const clearWord = word.replace(/[^\w\s]|_/g, "").toLowerCase().replace(/ /g, "");
    clearWord.split("").forEach(char => {
        const existKeys = Object.keys(resultObj);
        if(!existKeys.includes(char)){
            resultObj[`${char}`] = clearWord.split("").filter(el => el === char).length;
        }
    });
    return resultObj;
}

console.log(getSubjectsForStudent(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log("Banana");
console.log(calculateWordLetters("Banana"));