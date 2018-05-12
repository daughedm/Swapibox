import React from 'react';
import Button from '../Button/Button';
import '../Navigation/Navigation.css';
import StarWarsLogo from '../../../Assets/Images/Star_Wars.svg';

const Navigation = ({ handleClick, favorites }) => {

  return(
    <div className="nav-container" >
      <img className="logo" src={StarWarsLogo} alt="star wars logo" />
      <Button 
        handleClick={handleClick}
        favorites={favorites}/>
    </div>
  )
}

export default Navigation;