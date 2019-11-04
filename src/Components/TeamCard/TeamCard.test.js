import React from 'react';
import { shallow } from 'enzyme';
import { TeamCard, mapStateToProps, mapDispatchToProps } from './TeamCard';
import { getRoster, getTeamSchedule } from '../../actions/index';

describe('TeamCard', () => {
  let wrapper;

  let venue = {
    city: 'Philly',
    name: 'Wells Fargo'
  }

  let division = {
    name: 'Eastern'
  }

  let conference = {
    name: 'Metropolitan'
  }

beforeEach(() => {
  wrapper = shallow(
  <TeamCard venue={venue}
            division={division} 
            conference={conference}/>
  );
});
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mockStateToProps', () => {
  it('should return an object with data', () => {
    const mockState = {
      teams: [{}, {}, {}],
      errorMsg: 'error'
    };
    const expected = {
      teams: [{}, {}, {}],
      errorMsg: 'error'
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  const mockDispatch = jest.fn();

  it('should call dispatch with a getRoster action when handleDetails is clicked', () => {
    let roster = [{}, {}, {}]

    const actionToDispatch = getRoster(roster);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getRoster(roster);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('should call dispatch with a getTeamSchedule action when handleDetail is called', () => {
    let schedule = {home: 'here', away: 'there'}

    const actionToDispatch = getTeamSchedule(schedule);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getTeamSchedule(schedule);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

})