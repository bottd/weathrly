import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const icons = {
    clear: 'images/clear.svg',
    cloudy: 'images/cloudy.svg',
    partlycloudy: 'images/partlycloudy.svg',
    mostlycloudy: 'images/mostlycloudy.svg',
    rain: 'images/rain.svg',
    thunderstorm: 'images/thunderstorm.svg',
    snow: 'images/snow.svg'
}

ReactDOM.render(<App icons={icons}/>, document.getElementById('root'));
registerServiceWorker();
