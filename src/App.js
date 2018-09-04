import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mock.js';
import key from './key.js';
import Card from './Card.js';

class App extends Component {
  render() {
    console.log(data);
    return (
      <div className="App">
        <header>
          <div>
            <input className='location-search' type='search' name='search' />
            <button>Search</button>
          </div>
          <h1 className="city-name-title">city name here</h1>
        </header>
        <h2 className="current-date">September 00, 2018</h2>
        <div className='temperatures'>
          <h1 className='current-temp'>75&#8457;</h1>
          <div className='high-low-temp'>
            <h5 className='high-temp'>82&#8457;</h5>
            <h5 className='low-temp'>66&#8457;</h5>
          </div>
        </div>
        <div className='forecast-summary-dropdown'>
          <span className='forecast-summary-title'>Daily Forecast Summary</span>
          <div className='forecast-summary-content'>
            <p>This is today's forecast</p>
          </div>
        </div>
        <div className='seven-hour-forecast'>
          <Card />
          <Card />
          <Card />

        </div>
        <div className='ten-day-forecast'>
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    );
  }
}

export default App;
