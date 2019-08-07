import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';


const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
        {   
            /* ниже аналогично этому: */
            /* (swapiService) - Тот что передали в app */
            /* просто деструктурировали значения из swapiService */
            ({getPerson, getPersonImage }) => {
                return(
                    <ItemDetails 
                        itemId={itemId}
                        getData={getPerson}
                        getImageUrl={getPersonImage} >

                        <Record field="gender" label="Gender" />
                        <Record field="eyeColor" label="Eye Color" />
                    </ItemDetails>
                )
            }
        }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
        {
            ({ getPlanet, getPlanetImage }) => {
                return(
                    <ItemDetails 
                        itemId={itemId}
                        getData={getPlanet}
                        getImageUrl={getPlanetImage} >

                        <Record field="population" label="Population" />
                        <Record field="rotationPeriod" label="Rotation" />
                        <Record field="diameter" label="Diameter:" />
                    </ItemDetails>
                );
            }
        }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
        {
            ({ getStarship, getStarshipImage }) => {
                return(
                    <ItemDetails 
                        itemId={itemId}
                        getData={getStarship}
                        getImageUrl={getStarshipImage} >

                        <Record field="model" label="Modell" />
                        <Record field="length" label="Length" />
                        <Record field="costInCredits" label="Cost" />
                    </ItemDetails>
                );
            }
        }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};