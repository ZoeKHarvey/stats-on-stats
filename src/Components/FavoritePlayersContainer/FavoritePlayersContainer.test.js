import React from 'react';
import { FavoritePlayersContainer, mapStateToProps } from './FavoritePlayersContainer';
import { shallow } from 'enzyme';

describe('FavoitePlayersContainer', () => {
  let wrapper;
  let favoritePlayers = [{name: 'name'}]

  beforeEach(() => {
    wrapper = shallow(
      <FavoritePlayersContainer 
         favoritePlayers={favoritePlayers}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mockStateToProps', () => {
  it('should return an object with the roster data array', () => {
    const mockState = {
      roster: [{jerseyNumber: 1}, {jerseyNumber: 2}],
      teamSchedule: {home: 'here', away: 'there'},
      favoritePlayers: {name: 'pants'}
    };
    const expected = {
      roster: [{jerseyNumber: 1}, {jerseyNumber: 2}],
      teamSchedule: {home: 'here', away: 'there'},
      favoritePlayers: {name: 'pants'}
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})