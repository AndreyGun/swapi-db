import React from 'react';

import './row.css'

const Row = ({leftItem, rightItem}) => {
    return(
        <div className="info-group-block">
            {leftItem}
            {rightItem}
        </div>
    );
}

export default Row;