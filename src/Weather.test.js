import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import data from './mock';
import Weather from './Weather';
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
}

describe('Weather', () => {
  it('should take in props', () => {
    const wrapper = mount(<Weather data={data} icons={icons}/>)
    expect(wrapper).toBeDefined()
  });
});
