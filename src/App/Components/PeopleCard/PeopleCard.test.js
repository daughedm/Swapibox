import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PeopleCard from './PeopleCard';

describe('PeopleCard', () => {
  let wrapper;

  it('should match snapshot', () => {
    const person = {
      "name": "Luke Skywalker",
      "homeworld": "Alderaan",
      "species": "Human"
    }
    const addFavorite = jest.fn();
    wrapper = shallow(<PeopleCard item={person}
      Data="person"
      addFavorite={addFavorite} />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should call addFavorite on click with the correct props', () => {
    let mockProps = {
      Data: {
        "name": "Luke Skywalker",
        "homeworld": "Alderaan",
        "species": "Human"
      },
      addFavorite: jest.fn()
    };
  
    const wrapper = shallow(<PeopleCard {...mockProps} />)
    
    wrapper.find('.favorite').simulate('click');
    
    expect(mockProps.addFavorite).toHaveBeenCalledTimes(1);
    expect(mockProps.addFavorite).toHaveBeenCalledWith(mockProps.Data);

  });
})
