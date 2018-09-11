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
      mode: 'weather',
      data
    }
    this.getData = this.getData.bind(this);
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
          <h2 className='seven-hour-forecast-label'>7 Hour Forecast:</h2>
            <Hourly data={this.state.data} icons={this.props.icons}/>
          <h2 className='ten-day-forecast-label'>10 Day Forecast:</h2>
            <Daily data={this.state.data} icons={this.props.icons}/>
        </div>
      );  
    }    
  }
  // componentDidMount() {
  //   const request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/autoip.json`;
  //   const promise = fetch(request).then(data => data.json()).then(data => this.setState({data}));
  // }
  getData(location) {
    location = location.split(',');
    location[0] = location[0].replace(' ', '_');
    const request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${location[1]}/${location[0]}.json`;
    const promise = fetch(request).then(data => data.json()).then(result => this.setState({data: result, mode: 'weather'}));
    return promise;
  }


}

export default App;
