import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Card', () => {
  let mock = function() {};

  it('should exist', () => {
    const wrapper = shallow(<Search suggestCities={mock}/>);

    expect(wrapper).toBeDefined();
  });
  it('should have a state', () => {
    const wrapper = shallow(<Search suggestCities={mock}/>);

    expect(wrapper.state()).toBeDefined();
  });
});
