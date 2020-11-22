const pairsSel = document.querySelector("#pairs");
const themesSel = document.querySelector("#pairs-themes");
const studentMarkSel = document.querySelector("#student-mark");
const pairMarkSel = document.querySelector("#pairs-marks");

const studentsArr = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const maleArr = ["Олександр", "Ігор","Олексій"];
const femaleArr = ["Олена", "Іра","Світлана"];
const themesArr = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marksArr = [4, 5, 5, 3, 4, 5];
const pairsArr = divideIntoPairs(maleArr, femaleArr);
const pairsWithThemes = setThemes(themesArr);
const marksToStudents = setMarksToStudents(studentsArr, marksArr);
const pairsWithRandomMarks = setRandomMarksToPairs(pairsWithThemes);

function divideIntoPairs(men = [], women = []){
    let pairsResultsArr = [];
    for(let i = 0; i < men.length; i++){
        pairsResultsArr.push([men[i], women[i]]);
    }
    return pairsResultsArr;
}

function makePairsStrArr(dividedPairsArr = [[]]){
    let pairsResultsArr = [];
    for(let i = 0; i < dividedPairsArr.length; i++){
        pairsResultsArr.push(`${dividedPairsArr[i][0]} і ${dividedPairsArr[i][1]}`);
    }
    return pairsResultsArr;
}

function setThemes(themes = []){
    const pairsStrArr = makePairsStrArr(pairsArr);
    let pairsThemes = [];
    for(let i = 0; i < themes.length; i++){
        pairsThemes.push([pairsStrArr[i], themes[i]]);
    }
    return pairsThemes;
}

function setMarksToStudents(students = [], marks = []){
    let studentsWithMarks = [];
    for(let i = 0; i < students.length; i++){
        studentsWithMarks.push([students[i], marks[i]]);
    }
    return studentsWithMarks;
}

function setRandomMarksToPairs(pairsWithThemes = [[]]){
    let pairsWithThemesAndMarks = [...pairsWithThemes];
    for(let i = 0; i < pairsWithThemes.length; i++){
        let itemOfPairsWithThemes = [...pairsWithThemes[i]];
        itemOfPairsWithThemes.push(parseInt(Math.random() * (5 - 1) + 1));
        pairsWithThemesAndMarks.splice(i, 1, itemOfPairsWithThemes);
    }
    return pairsWithThemesAndMarks;
}
function displayPairs(){
    let listOfPairs = "";
    makePairsStrArr(pairsArr).forEach(function(item){
        listOfPairs = listOfPairs + item + "<br>";
    });
    pairsSel.innerHTML = listOfPairs;
}
function displayPairsThemes(){
    let listOfPairsThemes = "";
    for(let i = 0; i < pairsWithThemes.length; i++){
        listOfPairsThemes = listOfPairsThemes + pairsWithThemes[i][0] + " - " + `"${pairsWithThemes[i][1]}";` + "<br>";
    }
    themesSel.innerHTML = listOfPairsThemes;
}
function displayStudentsMarks(){
    let listOfStudentsMarks = "";
    for(let i = 0; i < marksToStudents.length; i++){
        listOfStudentsMarks = listOfStudentsMarks + marksToStudents[i][0] + " - " + `"${marksToStudents[i][1]}";` + "<br>";
    }
    studentMarkSel.innerHTML = listOfStudentsMarks;
}
function displayPairsMarks(){
    let listOfPairsMarks = "";
    for(let i = 0; i < pairsWithRandomMarks.length; i++){
        listOfPairsMarks = listOfPairsMarks + pairsWithRandomMarks[i][0] + " : " + `"${pairsWithRandomMarks[i][1]}"` + " - " + `"${pairsWithRandomMarks[i][2]}"` + "<br>";
    }
    pairMarkSel.innerHTML = listOfPairsMarks;
}
displayPairs();
displayPairsThemes();
displayStudentsMarks();
displayPairsMarks();
console.log(pairsArr);
console.log(pairsWithThemes);
console.log(marksToStudents);
console.log(pairsWithRandomMarks);