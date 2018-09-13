import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should accept props', () => {
    let weekday = 'Thursday';
    let wrapper = shallow(<Card weekday={weekday} />);
    let card = shallow(<Card weekday={'Thursday'} />);

    expect(wrapper).toEqual(card);
  });

});
