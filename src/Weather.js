import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Weather.css';

class Weather extends Component {
  render() {
    let current = this.props.data.current_observation;
    let forecast = this.props.data.forecast;

    let location = current.display_location.full;
    let weatherIcon = current.icon;
    let condition = current.weather;
    let time = current.observation_time;
    let temp = current.temp_f;
    let summary = forecast.txt_forecast.forecastday[0].fcttext;
    let low = forecast.simpleforecast.forecastday[0].low.fahrenheit;
    let high = forecast.simpleforecast.forecastday[0].high.fahrenheit;

    return (
      <div className='Weather'>
        <h2 className='city-name-title'>{location}</h2>
        <div className='icon-temp-container'>
          <img
            className='condition-icon'
            src={this.props.icons[weatherIcon]}
            alt={weatherIcon}/>
          <h1 className='current-temp'>{temp}&#8457;</h1>
          <div className='high-low-temp'>
            <h3 className='high-temp'>High: {high}&#8457;</h3>
            <h3 className='low-temp'>Low: {low}&#8457;</h3>
          </div>
        </div>
        <h2 className='current-condition'>{condition}</h2>
        <h2 className='current-summary'>{summary}</h2>
        <h3 className="current-date">{time}</h3>
      </div>
    );
  }

}
Weather.propTypes = { data: PropTypes.object, icons: PropTypes.object };

export default Weather;
