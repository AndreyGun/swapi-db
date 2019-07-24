
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details'

import './app.css'

const App = () => {
    return(
        <div className="app-container">
            <Header />
            <RandomPlanet />
            <div className="item-info-block">
                <ItemList />
                <PersonDetails />
            </div>
        </div>
    );
}

export default App;