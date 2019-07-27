import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './person-details.css'

export default class PersonDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson();
    }
    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ 
                    person,
                    loading: false
                 }); 
            })
            .catch(this.onError);
    }

    componentDidUpdate(prevprops) {
        // делать if обязательно если в ходе выполнение
        // функции будут в итоге меняться state -> this.setState();
        if ( this.props.personId != prevprops.personId ) {
            this.setState({
                loading: true
            });
            this.updatePerson()
        }
    }


    render() {

        if ( !this.state.person ) {
            return <span>Please select person from a list</span>
        }

        const { person, loading } = this.state;

        const personView = loading ? <Spinner /> : <PersonView person={person} />;

        return(
            <div className="person-details">
              {personView}
            </div>
        );
    }
}

const PersonView = ({ person }) => {

    const { id, name, gender, birthYear, eyeColor} = person;

    return(
        <React.Fragment>
            <div className="person-image">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
            </div>
            <div className="person-info-block">
                <h3 className="person-name">{name} </h3>

                <div className="person-info">
                    <span>Gender: </span>
                    <span className="person-gender">{gender}</span>
                </div>
                <div className="person-info">
                    <span>Birth Year: </span>
                    <span className="person-birth">{birthYear}</span>
                </div>

                <div className="person-info">
                    <span>Eye color: </span>
                    <span className="person-eye-color">{eyeColor}</span>
                </div>
            </div>
        </React.Fragment>
    );
}