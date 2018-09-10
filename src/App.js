import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Card from './Card';
import Weather from './Weather';
import Hourly from './Hourly';
import Daily from './Daily';
import data from './mock';
import key from './key';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data
    }
    this.getData = this.getData.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header>
          <Search/>
        </header>
        <Weather data={this.state.data}/>
        <h2 className='seven-hour-forecast-label'>7 Hour Forecast:</h2>
        <div className='forecast-containers'>
          <Hourly data={this.state.data}/>
        </div>
        <h2 className='ten-day-forecast-label'>10 Day Forecast:</h2>
        <div className='forecast-containers'>
          <Daily data={this.state.data}/>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/autoip.json`;
    const promise = fetch(request).then(data => data.json()).then(data => this.setState({data}));
  }
  getData(location) {
    location = location.split(',');
    location[0] = location[0].replace(' ', '_');
    console.log(location);
    const request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${location[1]}/${location[0]}.json`;
    const promise = fetch(request).then(data => data.json());
    console.log(promise);
    return promise;
  }
}

export default App;
