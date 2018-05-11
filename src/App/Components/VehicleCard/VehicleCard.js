import React from 'react';
import '../VehicleCard/VehicleCard.css';

const VehicleCard = ({ Data, image }) => {
  return (
    <div className="card" >
      <div className={image} alt="luke" />
      <h3>{Data.name}</h3>
      <h5>Model: {Data.model}</h5>
      <h5>Class: {Data.vehicle_class}</h5>
      <h5>Passengers: {Data.passengers}</h5>
    </div>
  )
}

export default VehicleCard;