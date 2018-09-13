import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Hourly.css';

class Hourly extends Component {
  render() {
    let cards = this.props.data.hourly_forecast.map((day, index) => {
      let hour = day.FCTTIME.civil;
      let weatherIcon = day.icon;
      let avg = day.temp.english;

      return (
        <Card
          date={hour}
          img={this.props.icons[weatherIcon]}
          temp={avg}
          key={index}
        />
      );
    });

    return (
      <div className="hourly-forecast">
        { cards.splice(0, 7) }
      </div>
    );
  }
}
Hourly.propTypes = {
  data: PropTypes.object,
  icons: PropTypes.object
};

export default Hourly;
