import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ForecastControl from './ForecastControl';

describe('Card', () => {
  it('should exist', () => {
    const wrapper = mount(<ForecastControl/>)
    expect(wrapper).toBeDefined()
  });
});
