import React, { Component } from 'react';
import './ForecastControl.css';

class ForecastControl extends Component {
  render() {
    return (
      <div className='forecastcontrol-container'>
        <button onClick={this.props.toggleHourly}>Hourly forecast</button>
        <button onClick={this.props.toggleHourly}>10 Day forecast</button>
      </div>
    );
  }
}


export default ForecastControl;

