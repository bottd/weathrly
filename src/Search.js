import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {search: '' };
  }
  render() {
    return (
      <form>
        <input
        className='search-input'
        type='search'
        name='search'
        value={this.state.search}
        onChange={(event) => {
          this.setState({search: event.target.value});
        }}
      />
        <button className='search-button' onClick={(event) => {
          event.preventDefault();
          this.props.getData(this.state.search);
        }}>Search</button>
      </form>
    );
  }
}


export default Search;
