
import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css'

export default class App extends Component {

    state = {
        toggleRandomPlanet: true,
        selectedPerson: 5
    }

    onToggleRadomPlanet = () => {
        this.setState(({ toggleRandomPlanet }) => {
            return {
                toggleRandomPlanet: !toggleRandomPlanet
            }
        });
    }

    onPersonSelected = (id) => {
        this.setState({ 
            selectedPerson: id
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
                    <ItemList 
                        onItemSelected={this.onPersonSelected}/>
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}