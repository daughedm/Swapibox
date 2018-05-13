import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import '../Main/Main.css';
import PropTypes from 'prop-types';

const Main = ({ 
  favorites, 
  vehicles,
  people,
  planets,
  currentCategory,
  addFavorite
}) => {
  const peopleImages = ['people0', 'people1', 'people2', 'people3', 'people4', 'people5', 'people6', 'people7', 'people8', 'people9'];
  const vehicleImages = ['vehicle0', 'vehicle1', 'vehicle2', 'vehicle3', 'vehicle4', 'vehicle5', 'vehicle6', 'vehicle7', 'vehicle8', 'vehicle9'];
  const planetsImages = ['planets0', 'planets1', 'planets2', 'planets3', 'planets4', 'planets5', 'planets6', 'planets7', 'planets8', 'planets9'];
  let cards;
  if(currentCategory === 'people'){
  cards = people.map((cat, i) => {
      return <PeopleCard 
              Data={people[i]}
              key={currentCategory+[i]}
              image={peopleImages[i]}
              currentCategory={currentCategory}
              addFavorite={addFavorite}
              />
    }) 
  } else if (currentCategory === 'vehicles'){
    cards = vehicles.map((cat, i) => {
      return <VehicleCard
              Data={vehicles[i]}
              key={currentCategory + [i]}
              image={vehicleImages[i]}
              currentCategory={currentCategory}
              addFavorite={addFavorite}
            />
    }) 
  } else if (currentCategory === 'planets'){
    cards = planets.map((cat, i) => {
      return <PlanetCard
              Data={planets[i]}
              key={currentCategory + [i]}
              image={planetsImages[i]}
              currentCategory={currentCategory}
              addFavorite={ addFavorite }
      />
    })   
  } else if (currentCategory === 'favorites') {
    cards = favorites.map((cat, i) => {
      if(cat.terrain) {
      return <PlanetCard
              key={currentCategory + [i]}
              image={planetsImages[i]}
              currentCategory={currentCategory}
              Data={favorites[i]}
              addFavorite={addFavorite}
             />
      } else if (cat.homeworld) {
        return <PeopleCard
          key={currentCategory + [i]}
          image={peopleImages[i]}
          currentCategory={currentCategory}
          Data={favorites[i]}
          addFavorite={addFavorite}
        />
      } else if (cat.model) {
        return <VehicleCard
          key={currentCategory + [i]}
          image={vehicleImages[i]}
          currentCategory={currentCategory}
          Data={favorites[i]}
          addFavorite={addFavorite}
        />
      }
    })   
  }

  return (
    <div className="main">
      {cards}
    </div>
  )
}
Main.propTypes = {
  favorites: PropTypes.array,
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  currentCategory: PropTypes.string,
  addFavorite: PropTypes.func,
};


export default Main;