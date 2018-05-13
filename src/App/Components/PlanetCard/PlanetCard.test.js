import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PlanetCard from './PlanetCard';

describe('PlanetCard', () => {
  let wrapper;

  it('should match snapshot', () => {
    const planet = {
      "name": "Alderaan",
      "terrain": "grasslands, mountains",
      "climate": "temperate",
      "population": "2000000000",
      "residents": 'Bob'
    };
    const addFavorite = jest.fn();
    wrapper = shallow(<PlanetCard item={planet}
      Data="planet"
      addFavorite={addFavorite} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call addFavorite on click with the correct props', () => {
    let mockProps = {
      Data: {
        "name": "Alderaan",
        "terrain": "grasslands, mountains",
        "climate": "temperate",
        "population": "2000000000",
        "residents": 'Bob'
      },
      addFavorite: jest.fn()
    };

    const wrapper = shallow(<PlanetCard {...mockProps} />);

    wrapper.find('.favorite').simulate('click');

    expect(mockProps.addFavorite).toHaveBeenCalledTimes(1);
    expect(mockProps.addFavorite).toHaveBeenCalledWith(mockProps.Data);

  });
});