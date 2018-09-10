import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className='card-container'>
        <h3>{this.props.date}</h3>
        <img className='card-icon' src={this.props.img}/>
        <h3>{this.props.temp}</h3>
      </div>
    );
  }
}


export default Card;
