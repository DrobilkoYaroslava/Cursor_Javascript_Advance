const peopleContainer = document.querySelector('.people');
const showBtn = document.querySelector('.film-btn');
const select = document.querySelector('#film');
const table = document.querySelector('table');
const episodeName = document.querySelector('#title');
const planetsPageBtn = document.querySelector('#planets-page-btn');


planetsPageBtn.addEventListener('click', function() {
    window.location.href = 'planets.html';
});

showBtn.addEventListener('click', function(){
    table.innerHTML = "";
    fetch(BASE_URL + 'films/' + select.value)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const film = new Film(data);
        episodeName.innerHTML = `episode name - "${film.title}"`;
        film.characters.then((response) => {
            generateTable(table, response);
            generateTableHead(table, response[0]);
        });
    });
});

function generateTableHead(table, data = {}) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    Object.keys(data).forEach(key => {
        const th = document.createElement("th");
        const text = document.createTextNode(TITLES[key]);
        th.appendChild(text);
        row.appendChild(th).classList.add('table-head');
    });
}

function generateTable(table, data) {
    for (let element of data) {
        const row = table.insertRow();
        row.classList.add('table-text');
    for (key in element) {
        const cell = row.insertCell();
        cell.classList.add('table-cell');
        const text = convertObjValueToDisplayValue(key, element[key]);
        cell.appendChild(text);
        }
    }
}

function convertObjValueToDisplayValue(key, value){
    switch (key) {
        case 'gender':
            switch (value) {
                case 'male':
                case 'female':
                    const img = document.createElement("img");
                    img.setAttribute("src", `img/${value}.png`);
                    img.classList.add("gender")
                    return img;
                default:
                    return document.createTextNode(value);
            }
        case 'imgSrc':
            const img = document.createElement("img");
            img.setAttribute("src", value);
            img.classList.add("photo");
            return img;
        default:
            return document.createTextNode(value) ;
    }
}


