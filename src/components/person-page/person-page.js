import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PersonPage extends Component {
    
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
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
        const itemlist = (
            <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople} 
                    renderItem={(item) => `${item.name} ${item.birthYear}`}/>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails 
                    personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return(
            <Row leftItem={itemlist} rightItem={personDetails}/>
        );
    }
}