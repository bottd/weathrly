import React, { Component } from 'react';

class Weather extends Component {
  render() {
    let location = this.props.data.current_observation.display_location.full;
    let weatherIcon = this.props.data.current_observation.icon_url;
    let condition = this.props.data.current_observation.weather;
    let time = this.props.data.current_observation.observation_time;
    let temp = this.props.data.current_observation.temperature_string;
    let summary = this.props.data.forecast.txt_forecast.forecastday[0].fcttext;
    let low = this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    let high = this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

    return (
      <div className='Weather'>
        <p>Location: {location}</p>
        <img src={weatherIcon}/>
        <p>Condition: {condition}</p>
        <p>{time}</p>
        <p>{temp}</p>
        <p>{summary}</p>
        <p>High: {high}</p>
        <p>Low: {low}</p>
      </div>
    );
  }

}

export default Weather;
