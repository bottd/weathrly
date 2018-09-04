import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import data from './mock';
import key from './key';

class App extends Component {
  render() {
    console.log(key);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Weather data={data}/>
      </div>
    );
  }
}

export default App;
