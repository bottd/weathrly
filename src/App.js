import React, { Component } from 'react';
import './App.css';
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
      mode: 'welcome',
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
        <form className='welcome-search'>
          <input className='location-search-input' type='search' name='search' />
          <button className='location-search-button'>Search</button>
          <button onClick={((event) => {
            event.preventDefault();
            this.getData('San Francisco, CA').then(result => this.setState({data: result, mode: 'weather'}));
          })}>
          Get San Fran</button>
        </form>
      );
    } else if (this.state.mode === 'weather') {
      return (
        <div className="App">
          <form className='location-search'>
            <input className='location-search-input' type='search' name='search' />
            <button className='location-search-button'>Search</button>
            <button onClick={((event) => {
              event.preventDefault();
              this.getData('San Francisco, CA').then(result => this.setState({data: result, mode: 'weather'}));
            })}>
            Get San Fran</button>
          </form>
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
    console.log(location);
    const request = `http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${location[1]}/${location[0]}.json`;
    const promise = fetch(request).then(data => data.json());
    console.log(promise);
    return promise;
  }


}

export default App;
