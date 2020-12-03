const ukraine = { name: "ukraine", tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { name: "latvia", tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { name: "litva", tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const salary = 2000;
const delay = 5000;

function getMyTaxes(salary){
    return (+(salary * this.tax).toFixed(2));
}

function getMiddleTaxes(){
    return (+(this.middleSalary * this.tax).toFixed(2));
}

function getTotalTaxes(){
    return (+(this.tax * this.middleSalary * this.vacancies).toFixed(2));
}

function getMySalary(min = 1500, max = 2000){
    const salary = parseInt(Math.random() * (max - min) + min);
    const taxes = getMyTaxes.call(this, salary);
    const profit = salary - taxes;
    return { name: this.name, salary: salary, taxes: taxes, profit: +profit.toFixed(0) };
}

function salaryLoop(){
    const result = getMySalary.call(this);
    console.log(result);
}

function getRandomCountry(){
    const countryArr = [ukraine, latvia, litva];
    const randomCountry = countryArr[Math.floor(Math.random() * countryArr.length)];
    return randomCountry;
}

let timer = setTimeout(function loop(){
    salaryLoop.call(getRandomCountry());
    timer = setTimeout(loop, delay);
}, delay);

console.log(getMyTaxes.call(ukraine, salary));
console.log(getMiddleTaxes.call(ukraine));
console.log(getTotalTaxes.call(ukraine));



