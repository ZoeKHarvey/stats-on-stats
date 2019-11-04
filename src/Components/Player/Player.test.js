import React from 'react';
import { shallow } from 'enzyme'
import { Player, mapStateToProps, mapDispatchToProps } from './Player';
import { getPlayerStats, getPlayerProjections, favoritePlayer } from '../../actions/index';

describe('Player', () => {
  let wrapper;

  let playerInfo = {
    fullName: 'Vito Burrito',
  }

  let playerStats = {
    assists: 100,
    goals: 90
  }

  let playerProjections = {
    assists: 200
  }

  beforeEach(() => {
    wrapper = shallow(
      <Player 
      playerInfo={playerInfo}
      playerStats={playerStats}
      playerProjections={playerProjections} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mockStateToProps', () => {
  it('should return an object with playerStats', () => {
    const mockState = {
      playerStats: {assists: 2},
      playerInfo: {fullName: 'dog'},
      playerProjections: {assists: 100}
    };
    const expected = {
      playerStats: {assists: 2},
      playerInfo: {fullName: 'dog'},
      playerProjections: {assists: 100}
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)

  });

  const mockDispatch = jest.fn();

})