import React from 'react';
import Vader from '../../../Assets/Images/vader.svg';
import DeathStar from '../../../Assets/Images/deathstar.svg';
import Falcon from '../../../Assets/Images/falcon.svg';
import '../Button/Button.css';

const Button = (props) => {

  return (
    <div className="buttons-wrapper" >
      <div className="button-container">
        <div className="circle">
          <img src={Vader} alt="people" type="button" className="icon"/>
        </div>
        <h2 className="btnTitle">PEOPLE</h2>
      </div>
      <div className="button-container">
        <div className="circle">
          <img src={DeathStar} alt="people" type="button" className="icon"/>
        </div>
        <h2 className="btnTitle">PLANETS</h2>
      </div>
      <div className="button-container">
        <div className="circle">
          <img src={Falcon} alt="people" type="button" className="icon"/>
        </div>
        <h2 className="btnTitle">VEHICLES</h2>
      </div>
      <div className="button-container divider">
        <div className="circle filled">
          <h3 className="favorite-number">12</h3>
        </div>
        <h2 className="btnTitle">FAVORITES</h2>
      </div>
    </div>
  )
}

export default Button;