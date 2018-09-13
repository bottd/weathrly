import React from 'react';
import { shallow } from 'enzyme';
import data from './mock';
import Daily from './Daily';

describe('Daily', () => {
  let wrapper;

  beforeEach(() => {
    let icon = {weatherIcon: 'weatherIcon'};

    wrapper = shallow(<Daily data={data} icons={icon}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should accept props', () => {
    let icon = {newIcon: 'newIcon'};
    let newWrapper = shallow(<Daily data={data} icons={icon}/>);

    expect(wrapper).toEqual(newWrapper);
  });

});
