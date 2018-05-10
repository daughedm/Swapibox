import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import OpeningScroll from './Components/OpeningScroll/OpeningScroll';
import Main from './Components/Main/Main';
import { crawlFetch } from './Helpers/Api';

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
      crawl: []
    }
  }

  async componentDidMount() {
    const filmsUrl = 'https://swapi.co/api/films/';
    const crawlText = await crawlFetch(filmsUrl);
    this.setState({ crawl: crawlText });
  };

  // handleClick = (e, cat) => {
  //   const data = await starwarsData(cat)
  //   const cleanData = await cleanData(data)
  //   this.setState(cleanData);
  // }

  handleClick = (category) => {
    
    this.setState({ 
      onLandingPage: false,
      currentCategory: category
     })
  }


  render() {
    const onLandingPage = this.state.onLandingPage;
    return (
      <div className="App">
        <Navigation 
          className="App-header"
          handleClick={this.handleClick} />
        { onLandingPage ? (
          <OpeningScroll crawl={this.state.crawl}/> 
        ) : (
          <Main />
        )}
      </div>
      );
  }
}

export default App;
