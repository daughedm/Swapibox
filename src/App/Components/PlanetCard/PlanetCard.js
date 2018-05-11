import React from 'react';
import '../PlanetCard/PlanetCard.css';

const PlanetCard = ({ Data, image }) => {
  return (
    <div className="card" >
      <div className={image} alt="luke" />
      <h3>{Data.name}</h3>
      <h5>Climate: {Data.climate}</h5>
      <h5>Terrain: {Data.terrain}</h5>
      <h5>Population: {Data.population}</h5>
      <h5>Residents: {Data.residents}</h5>
    </div>
  )
}

export default PlanetCard;