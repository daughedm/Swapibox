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
})