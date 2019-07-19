import React from 'react';

import './header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="star-db-logo">Star DB</div>
            <div className="header-list">
                <div className="list-item">
                    <span>People</span>
                </div>
                <div className="list-item">
                    <span>Planets</span>
                </div>
                <div className="list-item">
                    <span>Starships</span>
                </div>
            </div>

        </div>
    );
}

export default Header;