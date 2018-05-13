import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Main', () => {
  let wrapper;

  it('should match snapshot', () => {
    const favorites = ['favorite'];
    const handleClick = jest.fn();

    wrapper = shallow(<Navigation
      category="people"
      handleClick={handleClick}
      favorites={favorites} />)

    expect(wrapper).toMatchSnapshot();
  });
})
