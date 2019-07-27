
import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css'
import ErrorIndicator from '../error-indicator';

export default class App extends Component {

    state = {
        toggleRandomPlanet: true,
        selectedPerson: 4,
        hasError: false
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