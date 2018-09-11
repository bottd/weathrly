import React, { Component } from 'react';
import './ForecastControl.css';

class ForecastControl extends Component {
  render() {
    return (
      <div className='forecastcontrol-container'>
        <button disabled={this.props.currentHourly} onClick={this.props.toggleHourly}>Hourly forecast</button>
        <button disabled={!this.props.currentHourly} onClick={this.props.toggleHourly}>10 Day forecast</button>
      </div>
    );
  }
}


export default ForecastControl;

