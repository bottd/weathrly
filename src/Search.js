import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form className='search'>
        <input className='location-search-input' type='search' name='search' />
        <button className='location-search-button'>Search</button>
      </form>
    );
  }
}


export default Search;
