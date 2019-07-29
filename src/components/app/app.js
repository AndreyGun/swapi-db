
import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css'
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PersonPage from '../person-page/person-page';

export default class App extends Component {

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
        console.log(this.state.hasError );
        if ( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const { toggleRandomPlanet } = this.state;

        const togglePlanet = toggleRandomPlanet ? <RandomPlanet /> : null;

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
                <PersonPage />
            </div>
        );
    }
}