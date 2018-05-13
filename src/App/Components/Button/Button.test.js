import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let wrapper;

  it('should match snapshot', () => {
    const favorites = ['favorite'];
    const handleClick = jest.fn();
    
    wrapper = shallow(<Button 
      category="people"
      handleClick={handleClick} 
      favorites={favorites}/>)

    expect(wrapper).toMatchSnapshot();
  });
})
