import React from 'react';
import '../PeopleCard/PeopleCard.css';

const PeopleCard = ({ Data, image }) => {
  return (
    <div className="card" >
      <div className={image} alt="luke"/>
      <h3>{Data.name}</h3>
      <h5>Species: {Data.species}</h5>
      <h5>Homeworld: {Data.homeworld}</h5>
      <h5>Population: {Data.population}</h5>
    </div>
  )
}

export default PeopleCard;