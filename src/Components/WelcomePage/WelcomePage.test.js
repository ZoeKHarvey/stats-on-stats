import React from 'react';
import { shallow } from 'enzyme'
import { WelcomePage, mapStateToProps } from './WelcomePage';
import { getPlayerStats, getPlayerProjections, favoritePlayer } from '../../actions/index';

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
