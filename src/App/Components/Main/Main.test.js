import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  let wrapper;

  it('should match snapshot', () => {
    const favorites = ['favorite'];
    const handleClick = jest.fn();

    wrapper = shallow(<Main
      category="people"
      handleClick={handleClick}
      favorites={favorites} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render PeopleCards when current Category is people', () => {
    
    const updatedState = {
      currentCategory: 'people',
      favorites: [],
      vehicles: [],
      people: [{
        "name": "Luke Skywalker",
        "homeworld": "Alderaan",
        "species": "Human"
      }],
      planets: []
    };
    
    const wrapper = shallow(<Main {...updatedState}/>);

    expect(wrapper.find('PeopleCard').length).toEqual(1);
    expect(wrapper.find('PlanetCard').length).toEqual(0);
    expect(wrapper.find('VehicleCard').length).toEqual(0);
  });

  it('should render PlanetCards when current Category is people', () => {

    const updatedState = {
      currentCategory: 'planets',
      favorites: [],
      vehicles: [],
      people: [],
      planets: [{
        "name": "Luke Skywalker",
        "homeworld": "Alderaan",
        "species": "Human"
      }]
    };

    const wrapper = shallow(<Main {...updatedState} />);

    expect(wrapper.find('PeopleCard').length).toEqual(0);
    expect(wrapper.find('PlanetCard').length).toEqual(1);
    expect(wrapper.find('VehicleCard').length).toEqual(0);
  });

  it('should render VehicleCards when current Category is people', () => {

    const updatedState = {
      currentCategory: 'vehicles',
      favorites: [],
      vehicles: [{
        "name": "Luke Skywalker",
        "homeworld": "Alderaan",
        "species": "Human"
      }],
      people: [],
      planets: []
    };

    const wrapper = shallow(<Main {...updatedState} />);

    expect(wrapper.find('PeopleCard').length).toEqual(0);
    expect(wrapper.find('PlanetCard').length).toEqual(0);
    expect(wrapper.find('VehicleCard').length).toEqual(1);
  });
});
