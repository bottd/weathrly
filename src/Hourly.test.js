import React from 'react';
import { shallow } from 'enzyme';
import data from './mock';
import Hourly from './Hourly';

const icons = {
  clear: 'images/clear.svg',
  cloudy: 'images/cloudy.svg',
  partlycloudy: 'images/partlycloudy.svg',
  mostlycloudy: 'images/mostlycloudy.svg',
  rain: 'images/rain.svg',
  chancerain: 'images/rain.svg',
  thunderstorm: 'images/thunderstorm.svg',
  chancetstorms: 'images/thunderstorm.svg',
  snow: 'images/snow.svg'
};

describe('Hourly', () => {
  it('should exist', () => {
    const wrapper = shallow(<Hourly data={data} icons={icons}/>);

    expect(wrapper).toBeDefined();
  });
  it('should have 7 hour cards', () => {
    const wrapper = shallow(<Hourly data={data} icons={icons}/>);

    expect(wrapper.find('Card').length).toEqual(7);
  });
});
