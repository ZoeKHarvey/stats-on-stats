import React from 'react';
import { shallow } from 'enzyme'
import { Player, mapStateToProps } from './Player';

describe('Player', () => {
  let wrapper;

  let playerInfo = {
    fullName: 'Vito Burrito',
  };

  let playerStats = {
    assists: 100,
    goals: 90
  };

  let playerProjections = {
    assists: 200
  };

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

  it('should call favoriteAPlayer on click', () => {
    wrapper.instance().favoriteAPlayer = jest.fn()

    wrapper.find('button').simulate('click')
    
    expect(wrapper.instance().favoriteAPlayer).toHaveBeenCalled()
  })

  it('should organize stats', () => {
    const projections = {
      assists: 1,
      games: 2,
      goals: 4,
      hits: 5,
      pim: 6,
      plusMinus: 2,
      points: 7,
      powerPlayPoints: 4,
      shotPct: .3,
      shots: 4,
      faceOffPct: 5
    }

    const expected = {
    assists: projections.assists,
    games: projections.games,
    goals: projections.goals,
    hits: projections.hits,
    pim: projections.pim,
    plusMinus: projections.plusMinus,
    points: projections.points,
    powerPlayPoints: projections.powerPlayPoints,
    shotPct: projections.shotPct,
    shots: projections.shots,
    faceOffPct: projections.faceOffPct
  }

    const disorganizedData = {
      hometown: 'somewhere',
      age: 30,
      awayGames: 4,
      homeGames: 5,
      assists: projections.assists,
      games: projections.games,
      goals: projections.goals,
      hits: projections.hits,
      pim: projections.pim,
      plusMinus: projections.plusMinus,
      points: projections.points,
      powerPlayPoints: projections.powerPlayPoints,
      shotPct: projections.shotPct,
      shots: projections.shots,
      faceOffPct: projections.faceOffPct
    }

    expect(wrapper.instance().organizeProjections(disorganizedData)).toEqual(expected)

  })
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

});