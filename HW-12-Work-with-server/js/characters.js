class Character{
    constructor(character = {}){
        this.name = character.name;
        this.birth_year = character.birth_year;
        this.gender = character.gender;
        this.imgSrc = IMAGES[this.name];
    }
}