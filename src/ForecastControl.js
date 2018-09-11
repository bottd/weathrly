import React, { Component } from 'react';
import './ForecastControl.css';

class ForecastControl extends Component {
  render() {
    return (
      <div className='forecast-button-container'>
        <button className='hourly-forecast-button' disabled={this.props.currentHourly} onClick={this.props.toggleHourly}>Hourly forecast</button>
        <button className='daily-forecast-button' disabled={!this.props.currentHourly} onClick={this.props.toggleHourly}>10 Day forecast</button>
      </div>
    );
  }
}


export default ForecastControl;

