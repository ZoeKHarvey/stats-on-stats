import React from 'react';
import { shallow } from 'enzyme'
import { WelcomePage } from './WelcomePage';

describe('WelcomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WelcomePage />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
