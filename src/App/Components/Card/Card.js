import React from 'react';
import '../Card/Card.css';
import lukeskywalker from '../../../Assets/Images/lukeskywalker.jpg'

const Main = ({ personData, key }) => {

  return (
    <div className="card" >
      <img className="image" src={lukeskywalker} alt="luke"/>
      <h3>{personData.name}</h3>
      <h5>Species: {personData.species}</h5>
      <h5>Homeworld: {personData.homeworld}</h5>
      <h5>Population: {personData.population}</h5>
    </div>
  )
}

export default Main;