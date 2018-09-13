import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('suggests cities', () => {
    expect(instance.suggestCities('Denv')).toEqual(['Denver, CO']);
  });

  it('retrieves data from api', () => {
    let message;

    return fetch('http://api.wunderground.com/api/d85b8701d1756fa1/conditions/hourly/forecast10day/q/co/denver.json')
      .then(() => message = 'Success')
      .catch(() => message = 'Error!!!!');
    expect(message).toEqual('Success');
  });

  it('toggles hourly state', () => {
    expect(instance.state.hourly).toBeTruthy();
    instance.toggleHourly();
    expect(instance.state.hourly).toBeFalsy();
  });

});

