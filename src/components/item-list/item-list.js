import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-list.css'

export default class ItemList extends Component {

    state = {
        itemList: null
    }
    
    componentDidMount() {

        const { getData } = this.props;

        getData()
          .then( (itemList) => {
            this.setState({
                itemList
            })
        });
    }
    renderItems(arr) {
        return arr.map((item) => {

            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <div className="item-list"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    <span>
                        {label}
                    </span>
                </div>
            )
        })
    }

    render() {

        const { itemList } = this.state;

        if (!itemList)  {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return(
            <div className="item-list-block">
                {items}
            </div>
        );
    };
}