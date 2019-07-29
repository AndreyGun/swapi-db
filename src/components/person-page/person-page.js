import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class PersonPage extends Component {
    
    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson: selectedPerson});
    }

    render() {
        return(
            <div className="item-info-block">
                <ItemList 
                    onItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        );
    }
}