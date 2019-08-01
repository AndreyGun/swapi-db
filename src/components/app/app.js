
import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import Row from '../row';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';

import './app.css'

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        toggleRandomPlanet: true,
        hasError: false
    }

    onToggleRadomPlanet = () => {
        this.setState(({ toggleRandomPlanet }) => {
            return {
                toggleRandomPlanet: !toggleRandomPlanet
            }
        });
    }
    
    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if ( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const togglePlanet = this.state.toggleRandomPlanet ?
            <RandomPlanet /> :
            null;

        const { getPerson, getStarship, 
            getPersonImage, getStarshipImage } = this.swapiService;
        
        const personDetails = (
            <ItemDetails 
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} />
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} />
        );

        return(
            <div className="app-container">
                <Header />
                {togglePlanet}
                <div className="functional-btns">
                    <button className="btn toggleRandomPlanetBtn"
                            onClick={this.onToggleRadomPlanet}>
                            Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>
                <Row 
                    leftItem={personDetails}
                    rightItem={starshipDetails}
                />
            </div>
        );
    }
} 