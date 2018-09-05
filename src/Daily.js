import React, { Component } from 'react';
import Card from './Card';

class Daily extends Component {
  render() {
    let forecast = this.props.data.forecast.simpleforecast.forecastday.map(day => {
      return day;
    });
    return (
      <div className='ten-day-forecast'>
        <p>Gonna work on this soon</p>
      </div>);
  }
}

export default Daily;
