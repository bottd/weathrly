import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className='card-container'>
        <div className='color-label'></div>
        <h3 className='card-day'>{this.props.weekday}</h3>
        <h3 className='card-time'>{this.props.date}</h3>
        <img className='card-icon' src={this.props.img} alt={this.props.img}/>
        <h3>{this.props.temp}&#8457;</h3>
      </div>
    );
  }
}
Card.propTypes = {
  weekday: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  temp: PropTypes.string
};


export default Card;
