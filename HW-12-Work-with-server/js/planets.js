const planetsTitle = document.querySelector('.planets-title');
const planetsList = document.querySelector('.planets-list');
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');
const wookieeBtn = document.querySelector('#wookiee');
let activeList = {};
let currentPage = 1;
let queryParam = "";

wookieeBtn.addEventListener('click', function(){
    queryParam = queryParam.length ? '' : '&format=wookiee';
    loadData(currentPage, queryParam);
});

backBtn.addEventListener('click', function(event){
    if(Object.keys(activeList).length && (activeList.previous || activeList[WOOKIEE_KEYS["previous"]])){
        currentPage = currentPage - 1;
        if(currentPage >= 1){
        loadData(currentPage, queryParam);
        }
    } else{
        event.target.setAttribute('active', 'false');
    }
});
nextBtn.addEventListener('click', function(event){
    if(Object.keys(activeList).length && (activeList.next || activeList[WOOKIEE_KEYS["next"]])){
        currentPage = currentPage + 1;
        if(currentPage <= 6){
        loadData(currentPage, queryParam);
        }
    } else{
        event.target.setAttribute('active', 'false');
    }
});

function loadData(pageNumber, query = ""){
    planetsTitle.innerHTML = `Planets page ${currentPage}`;
    planetsList.innerHTML = ``;
    fetch(BASE_URL + "planets?page=" + pageNumber + query)
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        const data = JSON.parse(text.replace(/whhuanan/g, '"whhuanan"'));
        activeList = data;
        displayPlanetsList(activeList.results || activeList[WOOKIEE_KEYS["results"]]);
        nextBtn.setAttribute('active', `${(activeList.next !== null) || (activeList[WOOKIEE_KEYS["next"]] !== null)}`);
        backBtn.setAttribute('active',`${(activeList.previous !== null) || (activeList[WOOKIEE_KEYS["previous"]] !== null)}`);
    });
}

function displayPlanetsList(activeListResults = [{}]) {
    if(Array.isArray(activeListResults)) {
        const planetsNames = activeListResults.map(obj => obj.name || obj[WOOKIEE_KEYS["name"]]);
        planetsNames.forEach(nameEl => {
            const li = document.createElement('li');
            li.classList.add('planet-name');
            li.innerHTML = nameEl;
            planetsList.appendChild(li);
        });
    }
}

loadData(currentPage);
