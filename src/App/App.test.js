import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('matches snapshot', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
   
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct default state', () => {
    const expectedState = {
      onLandingPage: true,
      currentCategory: '',
      favorites: [],
      vehicles: [],
      people: [],
      planets: [],
      crawl: {}
    };
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should render Navigation and OpeningScroll by default', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    
    expect(wrapper.find('Navigation').length).toEqual(1);
    expect(wrapper.find('OpeningScroll').length).toEqual(1);
    expect(wrapper.find('Main').length).toEqual(0);
  });

  it('should render Main and Navigation when onLandingPage is false', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    
    const updatedState = {
      onLandingPage: false,
      currentCategory: '',
      favorites: [],
      vehicles: [],
      people: [],
      planets: [],
      crawl: {}
    };

    wrapper.setState(updatedState);
    
    expect(wrapper.find('Navigation').length).toEqual(1);
    expect(wrapper.find('Main').length).toEqual(1);
    expect(wrapper.find('OpeningScroll').length).toEqual(0);
  });

  it('Should Add a card to favorites when addFavorite is called', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    
    const selectedCard = {
      Homeworld: "Tatooine",
      Name: "C-3PO",
      Population: "200000",
      Species: "Droid"
    };
    
    wrapper.instance().addFavorite(selectedCard);
    expect(wrapper.state().favorites).toEqual([selectedCard]);
  });

  it('Should Remove a card from favorites when removeFavorite is called', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });

    const selectedCard = {
      Homeworld: "Tatooine",
      Name: "C-3PO",
      Population: "200000",
      Species: "Droid"
    };

    wrapper.instance().addFavorite(selectedCard);
    expect(wrapper.state().favorites).toEqual([selectedCard]);

    wrapper.instance().addFavorite(selectedCard);
    expect(wrapper.state().favorites).toEqual([]);
  });
});