import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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
})
