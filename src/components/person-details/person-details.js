import React from 'react';
import './person-details.css'

const PersonDetails = () => {

    return(
        <div className="person-details">
            <div className="person-image"></div>
            <div className="person-info-block">
                <h3 className="person-name">R2 D2</h3>

                <div className="person-info">
                    <span>Gender: </span>
                    <span className="person-gender">Male</span>
                </div>
                <div className="person-info">
                    <span>Birth Year: </span>
                    <span className="person-birth">43</span>
                </div>

                <div className="person-info">
                    <span>Eye color: </span>
                    <span className="person-eye-color">red</span>
                </div>

            </div>
        </div>
    );
}

export default PersonDetails;