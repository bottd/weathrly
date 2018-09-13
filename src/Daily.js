import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Daily.css';

class Daily extends Component {
  render() {
    let days = this.props.data.forecast.simpleforecast.forecastday;
    let forecast = days.map((day, index) => {
      let weekday = `${day.date.weekday}`;
      let date = `${day.date.monthname_short} ${day.date.day}`;
      let weatherIcon = day.icon;
      let high = day.high.fahrenheit;
      let low = day.low.fahrenheit;

      return (
        <Card
          weekday={weekday}
          date={date}
          img={this.props.icons[weatherIcon]}
          temp={`Hi: ${high} Low: ${low}`}
          key={index}/>
      );
    });

    return (
      <div className='daily-forecast'>
        { forecast }
      </div>);
  }
}
Daily.propTypes = {
  data: PropTypes.object,
  icons: PropTypes.object
};

export default Daily;
