import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PersonPage extends Component {
    
    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ 
            hasError: true
        });
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson: selectedPerson});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return(
            <div className="item-info-block">
                <ItemList 
                    onItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        );
    }
}