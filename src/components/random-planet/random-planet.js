import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'

import './random-planet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(planet => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
    };

    render() {

        const { id, name, population, rotationPeriod, diameter } = this.state;
        
        return(
            <div className="random-planet">
                <div className="planet-image">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                </div>
                <div className="planet-info-block">
                    <h3 className="planet-name">{name}</h3>

                    <div className="planet-info planet-population">

                        <span>Population: </span>
                        <span className="population-number">{population}</span>
                    </div>
                    <div className="planet-info planet-rotation">
                        <span>Rotation period: </span>
                        <span className="rotation-number">{rotationPeriod}</span>
                    </div>

                    <div className="planet-info planet-diameter">
                        <span>Diameter: </span>
                        <span className="diameter-number">{diameter}</span>
                    </div>

                </div>
            </div>
        );
    }
}