

export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +  `, recived ${res.status}`);
        }
        
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    _extractId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformStarship= (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            gender: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

// const swapi = new SwapiService();
// swapi.getAllPeople().then((r) => {
// 	console.log(r);
// });

// swapi.getAllStarships()
//     .then((people) => {
//         people.forEach((p) => {
//             console.log(p.name);
//         })
//     });
// swapi.getStarship(3)
//     .then((st) => {
//         console.log('****************');
//         console.log(st.name);
//     });