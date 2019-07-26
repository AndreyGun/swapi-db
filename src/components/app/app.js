
import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details'
import Spinner from '../spinner';

import './app.css'

export default class App extends Component {

    state = {
        toggleRandomPlanet: true
    }

    onToggleRadomPlanet = () => {
        this.setState(({ toggleRandomPlanet }) => {
            return {
                toggleRandomPlanet: !toggleRandomPlanet
            }
        });
    }

    render() {

        const { toggleRandomPlanet } = this.state;

        const togglePlanet = toggleRandomPlanet ? <RandomPlanet /> : null;

        return(
            <div className="app-container">
                <Header />
                {togglePlanet}
                <button className="btn toggleRandomPlanetBtn"
                        onClick={this.onToggleRadomPlanet}>
                        Toggle Random Planet
                </button>
                <div className="item-info-block">
                    <ItemList />
                    <PersonDetails />
                </div>
            </div>
        );
    }
}