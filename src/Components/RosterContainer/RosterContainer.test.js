import React from 'react';
import { RosterContainer, mapStateToProps } from './RosterContainer';
import { shallow } from 'enzyme';

describe('RosterContainer', () => {
  let wrapper;

  let roster = [{
    jerseyNumber: 1,
    name: 'Veet',
  }];

  let teamSchedule = {
    home: 'Doggos',
    away: 'Cattans'
  };

  beforeEach(() => {
    wrapper = shallow(
      <RosterContainer
        roster={roster}
        teamSchedule={teamSchedule} />
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
      teamSchedule: {home: 'here', away: 'there'}
    };
    const expected = {
      roster: [{jerseyNumber: 1}, {jerseyNumber: 2}],
      teamSchedule: {home: 'here', away: 'there'}
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})