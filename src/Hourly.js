import React, {Component} from 'react';
import Card from './Card';
import './Hourly.css';

class Hourly extends Component {
  render() {
    let cards = this.props.data.hourly_forecast.map(day => {
      let hour = day.FCTTIME.hour;
      let weatherIcon = day.icon;
      let avg = day.temp.english;
      return (
        <Card date={hour} img={this.props.icons[weatherIcon]} temp={avg}/>
      )
    });

    return (
      <div className="hourly-forecast">
        { cards.splice(0, 7) }
      </div>
    );
  }
}

export default Hourly;
