import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from './Search';

describe('Card', () => {
  it('should exist', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper).toBeDefined();
  });
  it('should have a state', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper.state()).toBeDefined();
  });
});
