import React from 'react';
import '../PeopleCard/PeopleCard.css';
import PropTypes from 'prop-types';

const PeopleCard = ({ Data, image, addFavorite}) => {
  return (
    <div className="card" >
      <div className={image} alt="person">
        <div 
          className="favorite"
          onClick={(event) => addFavorite( Data )}
        >
        </div>
      </div>
      <h3 className="card-header">{Data.name}</h3>
      <h5 className="sub-categories top">Species: <span className="normal">{Data.species}</span></h5>
      <h5 className="sub-categories">Homeworld: <span className="normal">{Data.homeworld}</span></h5>
      <h5 className="sub-categories">Population: <span className="normal">{Data.population}</span></h5>
    </div>
  )
}

PeopleCard.propTypes = {
  Data: PropTypes.object,
  image: PropTypes.string,
  addFavorite: PropTypes.func
};
export default PeopleCard;