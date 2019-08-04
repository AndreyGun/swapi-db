import React from 'react';

import './item-list.css'

const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {

        const { id } = item;
        const label = renderLabel(item);
        return (
            <div className="item-list"
                key={id}
                onClick={() => onItemSelected(id)}>
                <span>
                    {label}
                </span>
            </div>
        )
    })

    return(
        <div className="item-list-block">
            {items}
        </div>
    );
}

export default ItemList;