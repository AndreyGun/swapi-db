import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './item-details.css'


const Record = ({ item, field, label }) => {
    return(
        <div className="item-info">
            <span>{label}: </span>
            <span>{ item[field] }</span>
        </div>
    );
}
export {
    Record
};

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        // делать if обязательно если в ходе выполнение
        // функции будут в итоге меняться state -> this.setState();
        if ( this.props.itemId !== prevProps.itemId ) {
            this.setState({
                loading: true
            });
            this.updateItem()
        }
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


    render() {
        const { item , image  } = this.state;
        if ( !this.state.item ) {
            return <span>Please select item from a list</span>
        }

        const { name } = item;
        return(
            <div className="item-details">
                <div className="item-image">
                    <img src={image} alt="item"/>
                </div>
                <div className="item-info-block">
                    <h3>{name}</h3>
                    <div>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    }
}