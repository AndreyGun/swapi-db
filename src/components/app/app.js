
import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';

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

        const { getAllPeople, getAllPlanets, getPerson, getStarship, 
            getPersonImage, getStarshipImage } = this.swapiService;
        
        const personDetails = (
            <ItemDetails 
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={3}
                getData={getStarship}
                getImageUrl={getStarshipImage} >

                <Record  field="name" label="Name" />
                <Record  field="manufacturer" label="Manufacturer" />
            </ItemDetails>
        );
        const personList = (
            <ItemList 
                    getData={getAllPeople}>
                    { ({name}) => <span>{name}</span> }
                </ItemList>
        );
        const planetsList = (
            <ItemList 
                    getData={getAllPlanets}>
                    {({name}) => <span>{name}</span>}
            </ItemList>
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
                <Row 
                    leftItem={personList}
                    rightItem={planetsList}
                />
            </div>
        );
    }
} 