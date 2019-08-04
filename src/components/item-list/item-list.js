import React from 'react';
import { withData } from '../hoc-helpers';

import './item-list.css'
import SwapiService from '../../services/swapi-service';

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

const { getAllPeople } = new SwapiService();
export default withData(ItemList, getAllPeople);