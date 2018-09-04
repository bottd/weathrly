import React, {Component} from 'react';

class Hourly extends Component {
  render() {
    let cards = this.props.data.forecast.simpleforecast.forecastday.map(day => {
      let hour = day.date.hour;
      let img = day.icon_url;
      let avg = (parseFloat(day.high.fahrenheit) + parseFloat(day.low.fahrenheit)) / 2;
      return (
        <div className='card'>
        <p>Hour: {hour}</p>
        <img src={img}/>
        <p>Avg: {avg}</p>
        </div>);
    });

    return (
      <div className="Hourly-cast">
        { cards }
      </div>
    );
  }
}

export default Hourly;
