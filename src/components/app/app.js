import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

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

    swapiService = new DummySwapiService();

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
        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="app-container">
                        <Header />
                        <RandomPlanet />
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
                        
                        <Row 
                            leftItem={<PersonList />}
                            rightItem={<PlanetList />} />

                        <Row leftItem={<StarshipList />}  />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}