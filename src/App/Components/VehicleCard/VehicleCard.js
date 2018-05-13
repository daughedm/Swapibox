import React from 'react';
import '../VehicleCard/VehicleCard.css';
import PropTypes from 'prop-types';

const VehicleCard = ({ Data, image, addFavorite }) => {
  return (
    <div className="card" >
      <div className={image} alt="vehicle"><div className="favorite" onClick={(event) => addFavorite(Data)}></div></div>
      <h3 className="card-header">{Data.name}</h3>
      <h5 className="sub-categories top">Model: <span className="normal">{Data.model}</span></h5>
      <h5 className="sub-categories">Class: <span className="normal">{Data.vehicle_class}</span></h5>
      <h5 className="sub-categories">Passengers: <span className="normal">{Data.passengers}</span></h5>
    </div>
  )
}

VehicleCard.propTypes = {
  Data: PropTypes.object,
  image: PropTypes.string,
  addFavorite: PropTypes.func
};

export default VehicleCard;