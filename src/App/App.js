import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import OpeningScroll from './Components/OpeningScroll/OpeningScroll';
import Main from './Components/Main/Main'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLandingPage: true,
      currentCategory: null,
      favorites: [],
      vehicles: [],
      people:[],
      planets: [],
      scroll: []
    }
  }

  async componentDidMount() {
    // const apiCall = await starWarsData('films');
  };

  // handleClick = (e, cat) => {
  //   const data = await starwarsData(cat)
  //   const cleanData = await cleanData(data)
  //   this.setState(cleanData);
  // }


  render() {
    const onLandingPage = this.state.onLandingPage;
    return (
      <div className="App">
        <Navigation className="App-header" />
        { onLandingPage ? (
          <OpeningScroll /> 
        ) : (
          <Main />
        )}
      </div>
      );
  }
}

export default App;
