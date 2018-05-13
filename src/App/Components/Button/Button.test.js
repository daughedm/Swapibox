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

  it('should call handleClick on people button with the correct props', () => {
    let mockProps = {
      category: 'people',
      handleClick: jest.fn(),
      favorites: ['mock', 'favorites']
    };

    const wrapper = shallow(<Button {...mockProps} />)

    wrapper.find('#people-button').simulate('click');

    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
    expect(mockProps.handleClick).toHaveBeenCalledWith(mockProps.category);

  });

  it('should call handleClick on vehicles button with the correct props', () => {
    let mockProps = {
      category: 'vehicles',
      handleClick: jest.fn(),
      favorites: ['mock', 'favorites']
    };

    const wrapper = shallow(<Button {...mockProps} />)

    wrapper.find('#vehicle-button').simulate('click');

    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
    expect(mockProps.handleClick).toHaveBeenCalledWith(mockProps.category);

  });

  it('should call handleClick on planets button with the correct props', () => {
    let mockProps = {
      category: 'planets',
      handleClick: jest.fn(),
      favorites: ['mock', 'favorites']
    };

    const wrapper = shallow(<Button {...mockProps} />)

    wrapper.find('#planet-button').simulate('click');

    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
    expect(mockProps.handleClick).toHaveBeenCalledWith(mockProps.category);

  });

  it('should call handleClick on favorites button with the correct props', () => {
    let mockProps = {
      category: 'favorites',
      handleClick: jest.fn(),
      favorites: ['mock', 'favorites']
    };

    const wrapper = shallow(<Button {...mockProps} />)

    wrapper.find('#favorite-button').simulate('click');

    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
    expect(mockProps.handleClick).toHaveBeenCalledWith(mockProps.category);

  });
})
