import React from 'react';
import { shallow } from 'enzyme'
import NavLogos from '../NavLogos/NavLogos'

describe('NavLogos', () => {
  let wrapper;
  
  beforeEach(() => {
    let getSingleRoster = jest.fn()
      wrapper = shallow(
      <NavLogos 
      getSingleRoster={getSingleRoster}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})