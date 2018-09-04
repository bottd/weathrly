import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Hourly from './Hourly';
import data from './mock';
import key from './key';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather data={data}/>
        <Hourly data={data}/>
      </div>
    );
  }
}

export default App;
