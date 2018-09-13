import React, { Component } from 'react';
import Card from './Card';
import './Daily.css';

class Daily extends Component {
  render() {
    let forecast = this.props.data.forecast.simpleforecast.forecastday.map((day, index) => {
      let weekday = `${day.date.weekday}`;
      let date = `${day.date.monthname_short} ${day.date.day}`;
      let weatherIcon = day.icon;
      let high = day.high.fahrenheit;
      let low = day.low.fahrenheit;
      return (
        <Card weekday={weekday} date={date} img={this.props.icons[weatherIcon]} temp={`Hi: ${high} Low: ${low}`} key={index}/>
        );
    });
    return (
      <div className='daily-forecast'>
      { forecast }
      </div>);
  }
}

export default Daily;
