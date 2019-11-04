import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import NavLogos from '../NavLogos/NavLogos'

describe('NavLogos', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NavLogos />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})