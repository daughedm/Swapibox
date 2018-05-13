import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import OpeningScroll from './Components/OpeningScroll/OpeningScroll';
import Main from './Components/Main/Main';
import { crawlFetch, vehiclesFetch, peopleFetch, planetsFetch } from './Helpers/Api';
import { peopleCleaner } from './Helpers/Cleaner';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLandingPage: true,
      currentCategory: '',
      favorites: [],
      vehicles: [],
      people:[],
      planets: [],
      crawl: {}
    };
  }

  async componentDidMount() {
    const filmsUrl = 'https://swapi.co/api/films/';
    const crawlText = await crawlFetch(filmsUrl);
    this.setState({ crawl: crawlText });
  }

  addFavorite = ( selectedCard ) => {
    const favorites = this.state.favorites;
    const newFavorites = this.updateFavorites(favorites, selectedCard);
    this.setState({favorites: newFavorites});
  }

  updateFavorites = (favorites, selectedCard) => {
    const match = favorites.find(item => item === selectedCard);
    selectedCard.favorite = match ? "false" : "true";

    return match ? this.removeFavorite(favorites, selectedCard) : [...favorites, selectedCard];
  }

  removeFavorite = (favoritesList, card) => favoritesList.filter(item => item !== card);

  handleClick = async (category) => {
    const vehicleUrl = 'https://swapi.co/api/vehicles/';
    const peopleUrl = 'https://swapi.co/api/people/';
    const planetsUrl = 'https://swapi.co/api/planets/';

    if (category === 'vehicles') {
      const vehicleData = await vehiclesFetch(vehicleUrl);
      this.setState({ 
        vehicles: vehicleData,
        onLandingPage: false,
        currentCategory: category 
      });
    } else if (category === 'people') {
      const peopleData = await peopleFetch(peopleUrl);
      const cleanedPeopleData = peopleCleaner(peopleData);
      this.setState({
        people: cleanedPeopleData,
        onLandingPage: false,
        currentCategory: category
      });
    } else if (category === 'planets') {
      const planetsData = await planetsFetch(planetsUrl);
      this.setState({
        planets: planetsData,
        onLandingPage: false,
        currentCategory: category
      });
    } else if (category === 'favorites') {
      this.setState({
        onLandingPage: false,
        currentCategory: category
      });
    }
  }

  render() {
    const onLandingPage = this.state.onLandingPage;
    return (
      <div className="App">
        <Navigation 
          className="App-header"
          favorites={this.state.favorites}
          handleClick={this.handleClick} />
        { onLandingPage ? (
          <OpeningScroll crawl={this.state.crawl}/> 
        ) : (
          <Main 
            favorites={this.state.favorites}
            vehicles={this.state.vehicles}
            people={this.state.people}
            planets={this.state.planets} 
            currentCategory={this.state.currentCategory}
            addFavorite={this.addFavorite}
          />
        )}
      </div>
    );
  }
}

export default App;
