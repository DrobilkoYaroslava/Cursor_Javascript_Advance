class Film{
    constructor(film = {}){
        this.title = film.title;
        const characters = Array(film.characters)[0];
        const promises = [];
        characters.forEach(url => {
            promises.push(this.parseCharacter(url));
        });
        this.characters = Promise.all(promises);
    }
    async parseCharacter(url = ""){
        return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const people = data;
            return new Character(people);
        })
    }
}