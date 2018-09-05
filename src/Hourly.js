import React, {Component} from 'react';
import Card from './Card';
import './Hourly.css';

class Hourly extends Component {
  render() {
    let cards = this.props.data.hourly_forecast.map(day => {
      let hour = day.FCTTIME.hour;
      let img = day.icon_url;
      let avg = day.temp.english;
      return (
        <Card date={hour} img={img} temp={avg}/>
      )
    });

    return (
      <div className="hourly-forecast">
        { cards }
      </div>
    );
  }
}

export default Hourly;
