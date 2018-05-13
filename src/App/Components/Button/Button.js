import React from 'react';
import Vader from '../../../Assets/Images/vader.svg';
import DeathStar from '../../../Assets/Images/deathstar.svg';
import Falcon from '../../../Assets/Images/falcon.svg';
import '../Button/Button.css';
import PropTypes from 'prop-types';

const Button = ({ handleClick, favorites }) => {

  return (
    <div className="buttons-wrapper" >
      <div 
        id="people-button"
        className="button-container" 
        onClick={() => handleClick('people')} 
        type="button" 
      >
        <div className="circle">
          <img 
            src={Vader} 
            alt="people" 
            className="icon"/>
        </div>
        <h2 className="btnTitle">PEOPLE</h2>
      </div>
      <div 
        id="planet-button"
        className="button-container" 
        onClick={() => handleClick('planets')} 
        type="button">
        <div className="circle">
          <img 
            src={DeathStar} 
            alt="planets" 
            className="icon"/>
        </div>
        <h2 className="btnTitle">PLANETS</h2>
      </div>
      <div 
        id="vehicle-button"
        className="button-container" 
        onClick={() => handleClick('vehicles')} 
        type="button">
        <div className="circle" >
          <img 
            src={Falcon} 
            alt="vehicles" 
            className="icon"/>
        </div>
        <h2 className="btnTitle">VEHICLES</h2>
      </div>
      <div 
        id="favorite-button"
        className="button-container divider"
        onClick={() => handleClick('favorites')}
      >
        <div className="circle filled">
          <h3 className="favorite-number">{favorites.length ? favorites.length : 0}</h3>
        </div>
        <h2 className="btnTitle">FAVORITES</h2>
      </div>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  favorites: PropTypes.array
};

export default Button;
