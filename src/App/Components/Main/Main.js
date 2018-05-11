import React from 'react';
import Card from '../Card/Card';
import '../Main/Main.css';

const Main = ({ 
  favorites, 
  vehicles,
  people,
  planets,
  currentCategory
}) => {
  const cards = people.map((cat, i) => {
      return <Card 
              personData={people[i]}
              key={currentCategory+[i]}
              />
    }) 

  return (
    <div className="main">
      {cards}
    </div>
  )
}

export default Main;