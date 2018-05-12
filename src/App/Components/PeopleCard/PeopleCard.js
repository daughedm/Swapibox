import React from 'react';
import '../PeopleCard/PeopleCard.css';

const PeopleCard = ({ Data, image }) => {
  return (
    <div className="card" >
      <div className={image} alt="luke"><div className="favorite"></div></div>
      <h3 className="card-header">{Data.name}</h3>
      <h5 className="sub-categories top">Species: <span className="normal">{Data.species}</span></h5>
      <h5 className="sub-categories">Homeworld: <span className="normal">{Data.homeworld}</span></h5>
      <h5 className="sub-categories">Population: <span className="normal">{Data.population}</span></h5>
    </div>
  )
}

export default PeopleCard;