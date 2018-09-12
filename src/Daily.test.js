import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import data from './mock';
import Daily from './Daily';

describe('Daily', () => {
  let wrapper;

  beforeEach(() => {
    let icon = 'weatherIcon';
    wrapper = shallow(<Daily data={data} icons={icon}/>);
  })

  it('should exist', () => {
    console.log(wrapper);
    expect(wrapper).toBeDefined();
  });

  it('should accept props', () => {
    let icon = 'newIcon'; 
    let newWrapper = shallow(<Daily data={data} icons={'newIcon'}/>);
    expect(wrapper).toEqual(newWrapper);
  })

});
