import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Weather from './Weather';
import Hourly from './Hourly';
import data from './mock';
import key from './key';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='location-search'>
            <input className='location-search-input' type='search' name='search' />
            <button>Search</button>
          </div>
        </header>
        <Weather data={data}/>
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
        <Hourly data={data}/>
      </div>
    );
  }
}

export default App;
