import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

ReactDOM.render(<App icons={icons}/>, document.getElementById('root'));
