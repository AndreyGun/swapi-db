
import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

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

        const personList = (
            <PersonList>
                { ({name}) => <span>{name}</span>}
            </PersonList>
        );
        const planetsList = (
            <PlanetList>
                { ({name}) => <span>{name}</span>}
            </PlanetList>
        );
        return(
            <div className="app-container">
                <Header />
                <div className="functional-btns">
                    <button className="btn toggleRandomPlanetBtn"
                            onClick={this.onToggleRadomPlanet}>
                            Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PersonDetails itemId={11} />
                <StarshipDetails itemId={11} />
                <PlanetDetails itemId={3} />
                
                <div className="info-group-block">
                    <PersonList/>
                </div>
                <div className="info-group-block">
                    <PlanetList/>
                </div>
                <div className="info-group-block">
                    <StarshipList/>
                </div>
            </div>
        );
    }
} 