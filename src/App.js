import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Card from './Card';
import Weather from './Weather';
import ForecastControl from './ForecastControl';
import Hourly from './Hourly';
import Daily from './Daily';
import data from './mock';
import key from './key';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hourly: true,
      mode: 'welcome',
      data
    }
    this.getData = this.getData.bind(this);
    this.toggleHourly = this.toggleHourly.bind(this);
  }

  showWeather() {
    this.setState({mode: 'weather'});
  }

  render() {
    if (this.state.mode === 'welcome') {
      return (
        <div className='welcome-page'>
          <h1 className='welcome-title'>Weatherly</h1>
          <div className='welcome-search'>
            <Search getData={this.getData}/>
          </div>
        </div>
      );
    } else if (this.state.mode === 'weather') {
      return (
        <div className="App">
          <div className='location-search'>
            <Search getData={this.getData}/>
          </div>
          <Weather data={this.state.data} icons={this.props.icons}/>
          <h2 className='forecast-label'>Forecast</h2>
          <ForecastControl toggleHourly={this.toggleHourly}/>
          { this.state.hourly && <Hourly data={this.state.data} icons={this.props.icons}/> }
          { !this.state.hourly && <Daily data={this.state.data} icons={this.props.icons}/> }
        </div>
      );
    }
  }
  getData(location) {
    location = location.split(',');
    let  request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${location[1]}/${location[0]}.json`;
    if (location.length === 1) {
      request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${location}.json`;
    }
    const promise = fetch(request).then(data => data.json()).then(result => this.setState({data: result, mode: 'weather'}));
    return promise;
  }
  toggleHourly(){
    this.setState({hourly: !this.state.hourly});
  }
}

export default App;
