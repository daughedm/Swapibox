import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('VehicleCard', () => {
  let wrapper;
  it('should match snapshot', () => {
    const vehicle = {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "vehicleClass": "wheeled",
      "passengers": 30
    }
    const addFavorite = jest.fn();
    wrapper = shallow(<VehicleCard item={vehicle}
      Data="vehicle"
      addFavorite={addFavorite} />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should call addFavorite on click with the correct props', () => {
    let mockProps = {
      Data: {
        "name": "Sand Crawler",
        "model": "Digger Crawler",
        "vehicleClass": "wheeled",
        "passengers": 30
      },
      addFavorite: jest.fn()
    };

    const wrapper = shallow(<VehicleCard {...mockProps} />)

    wrapper.find('.favorite').simulate('click');

    expect(mockProps.addFavorite).toHaveBeenCalledTimes(1);
    expect(mockProps.addFavorite).toHaveBeenCalledWith(mockProps.Data);

  });
})