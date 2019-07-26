import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css'

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null
    }
    
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then( (peopleList) => {
                this.setState({
                    peopleList
                })
            });
    }
    renderItems(arr) {
        return arr.map(({name, id}) => {
            return (
                <div className="item-list"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    <span>{name}</span>
                </div>
            )
        })
    }

    render() {

        const { peopleList } = this.state;

        if (!peopleList)  {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return(
            <div className="item-list-block">
                {items}
            </div>
        );
    };
}