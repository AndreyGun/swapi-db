import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'

import './random-planet.css'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false  
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
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updatePlanet() {
        const id = 1511;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const planetView = hasData ? <PlanetView planet={planet}/>: null
        

        return(
            <div className="random-planet">
                {errorMessage}
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