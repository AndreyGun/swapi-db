import React from 'react';

import './random-planet.css'

const RandomPlanet = () => {
    return(
        <div className="random-planet">
            <div className="planet-image"></div>
            <div className="planet-info-block">
                <h3 className="planet-name">Planet Name</h3>

                <div className="planet-info planet-population">

                    <span>Population: </span>
                    <span className="population-number">12435</span>
                </div>
                <div className="planet-info planet-rotation">
                    <span>Rotation period: </span>
                    <span className="rotation-number">420</span>
                </div>

                <div className="planet-info planet-diameter">
                    <span>Diameter: </span>
                    <span className="diameter-number">100</span>
                </div>

            </div>
        </div>
    );
}

export default RandomPlanet;