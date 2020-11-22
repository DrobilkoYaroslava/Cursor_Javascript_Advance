const getPairs = students => {
    const pairs = [
        [students[0], students[2]], 
        [students[1], students[3]], 
        [students[4], students[5]]
    ];

    return pairs;
}

const makePairsByThemes = (pairs, themes) => {
    const pairsByThemes = [];
    pairs.forEach((pair, index) => {
        const getherPair = [`${pair[0]} і ${pair[1]}`, themes[index]]
        pairsByThemes.push(getherPair)
    });
    return pairsByThemes;
}

const putMarks = (students, marks) => {
    const studentsMarks = [];
    students.forEach((student, index) => {
        studentsMarks.push([student, marks[index]])
    })
    
    return studentsMarks;
}

const putMarksForPairs = list => {
    const result = []
    const minMark = 1;
    const maxMark = 5;
    pairsByThemes.forEach(pair => {
        const randomMark = Math.floor(Math.random() * (maxMark - minMark + 1) + minMark);
        result.push([...pair, randomMark])
    })
    
    return result
} 

const pairs = getPairs(students);
console.log(pairs);

const pairsByThemes = makePairsByThemes(pairs, themes)
console.log(pairsByThemes)

const studentsMarks = putMarks(students, marks);
console.log(studentsMarks)

const marksForPairs = putMarksForPairs(pairsByThemes)
console.log(marksForPairs)
