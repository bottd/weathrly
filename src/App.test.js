import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('mounts cities to trie', () => {

  })

  it('suggests cities', () => {
    expect(instance.suggestCities('Denv')).toEqual(['Denver, CO']);
  })

  it.skip('retrieves data from api', () => {
    expect(instance.getData(['Denver, CO'])).toEqual(false);
  })

  it('toggles hourly state', () => {
    expect(instance.state.hourly).toBeTruthy();
    instance.toggleHourly();
    expect(instance.state.hourly).toBeFalsy();
  })

})

