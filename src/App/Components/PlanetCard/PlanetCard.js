import React from 'react';
import '../PlanetCard/PlanetCard.css';
import heart from '../../../Assets/Images/like.svg';
import PropTypes from 'prop-types';

const PlanetCard = ({ Data, image, addFavorite }) => {
  return (
    <div className="card-planet" >
      <div  
        className={image} 
        alt="planet">
        <div  
          className="favorite"
          onClick={() => addFavorite(Data)}>
          <img  
            className="fav-icon" 
            src={heart} 
            alt="favorite" />
        </div>
      </div>
      <h3 className="card-header">{Data.name}</h3>
      <h5 className="sub-categories top">Climate: 
        <span className="normal"> {Data.climate}</span>
      </h5>
      <h5 className="sub-categories">Terrain: 
        <span className="normal"> {Data.terrain}</span>
      </h5>
      <h5 className="sub-categories">Population: 
        <span className="normal"> {Data.population}</span>
      </h5>
      <h5 className="sub-categories">Residents: 
        <span className="normal"> {Data.residents}</span>
      </h5>
    </div>
  );
};

PlanetCard.propTypes = {
  Data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  image: PropTypes.string,
  addFavorite: PropTypes.func
};


export default PlanetCard;