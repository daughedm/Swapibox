import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true })
    expect(wrapper).toMatchSnapshot();
  });



  
})
