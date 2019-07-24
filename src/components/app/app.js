
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
            <ItemList />
            <PersonDetails />
        </div>
    );
}

export default App;