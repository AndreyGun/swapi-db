import React from 'react';

import './item-list.css'

const ItemList = () => {
    return(
        <div className="item-list-block">
            <div className="item-list">
                <span>Luke Skywalker</span>
            </div>
            <div className="item-list">
                <span>Darth Vader</span>
            </div>
            <div className="item-list">
                <span>R2 D2</span>
            </div>
        </div>
    );
}

export default ItemList;
