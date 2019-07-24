import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'

import './random-planet.css'
import Spinner from '../spinner';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true     
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = 12;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
    };

    render() {

        const { planet, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const planetView = loading ? null : <PlanetView planet={planet}/>
        return(
            <div className="random-planet">
                {spinner}
                {planetView}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;
    return(
        <React.Fragment>
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
        </React.Fragment>
    );
}