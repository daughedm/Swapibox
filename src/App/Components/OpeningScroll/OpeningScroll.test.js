import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OpeningScroll from './OpeningScroll';

describe('Main', () => {
  let wrapper;

  it('should match snapshot', () => {
    const crawl = {
      "episode_id": "Luke Skywalker",
      "opening_crawl": "Alderaan",
      "title": "Human"
    };

    wrapper = shallow(<OpeningScroll
      crawl={crawl} />);

    expect(wrapper).toMatchSnapshot();
  });
});
