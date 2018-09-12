import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should exist', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper).toBeDefined();
  });
  it('should display props', () => {
    const wrapper = mount(<Card weekday={'Monday'}/>);
    expect(wrapper.find('.card-day').text()).toBe('Monday');
  });
});
