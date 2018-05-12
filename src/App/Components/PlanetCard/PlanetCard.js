import React from 'react';
import '../PlanetCard/PlanetCard.css';

const PlanetCard = ({ Data, image }) => {
  return (
    <div className="card-planet" >
      <div className={image} alt="luke" />
      <h3 className="card-header">{Data.name}</h3>
      <h5 className="sub-categories top">Climate: <span className="normal">{Data.climate}</span></h5>
      <h5 className="sub-categories">Terrain: <span className="normal">{Data.terrain}</span></h5>
      <h5 className="sub-categories">Population: <span className="normal">{Data.population}</span></h5>
      <h5 className="sub-categories">Residents: <span className="normal">{Data.residents}</span></h5>
    </div>
  )
}

export default PlanetCard;