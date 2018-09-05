import React, { Component } from 'react';
import Card from './Card';

class Daily extends Component {
  render() {
    let forecast = this.props.data.forecast.simpleforecast.forecastday.map(day => {
      let date = `${day.date.weekday}, ${day.date.monthname_short} ${day.date.day}`;
      let img = day.icon_url;
      let high = day.high.fahrenheit;
      let low = day.low.fahrenheit;
      return (
        <Card date={date} img={img} temp={`Hi: ${high} Low: ${low}`}/>
      );
    });
    return (
      <div className='ten-day-forecast'>
        { forecast }
      </div>);
  }
}

export default Daily;
