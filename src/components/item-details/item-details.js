import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './item-details.css'

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item, 
                    image: getImageUrl(item) ,
                    loading: false
                 }); 
            })
            .catch(this.onError);
    }

    componentDidUpdate(prevprops) {
        // делать if обязательно если в ходе выполнение
        // функции будут в итоге меняться state -> this.setState();
        if ( this.props.itemId != prevprops.itemId ) {
            this.setState({
                loading: true
            });
            this.updateItem()
        }
    }


    render() {

        if ( !this.state.item ) {
            //return <span>Please select item from a list</span>
        }

        const { item, loading } = this.state;

        const itemView = loading ? <Spinner /> : <ItemView item={item} />;

        return(
            <div className="item-details">
              {itemView}
            </div>
        );
    }
}

const ItemView = ({ item }) => {

    const { name, gender, birthYear, eyeColor, image} = item;

    return(
        <React.Fragment>
            <div className="item-image">
                <img src={image} />
            </div>
            <div className="item-info-block">
                <h3 className="item-name">{name} </h3>

                <div className="item-info">
                    <span>Gender: </span>
                    <span className="item-gender">{gender}</span>
                </div>
                <div className="item-info">
                    <span>Birth Year: </span>
                    <span className="item-birth">{birthYear}</span>
                </div>

                <div className="item-info">
                    <span>Eye color: </span>
                    <span className="item-eye-color">{eyeColor}</span>
                </div>
              <ErrorButton />
            </div>
        </React.Fragment>
    );
}