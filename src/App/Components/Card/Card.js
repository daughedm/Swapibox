import React from 'react';
import '../Card/Card.css';
import lukeskywalker from '../../../Assets/Images/lukeskywalker.jpg'

const Main = (props) => {

  return (
    <div className="card" >
      <img className="image" src={lukeskywalker} alt="luke"/>
      <h3>Luke Skywalker</h3>
      <h5>Species: asfgsg</h5>
      <h5>Homeworld: asfgsg</h5>
      <h5>Population: asfgsg</h5>
    </div>
  )
}

export default Main;