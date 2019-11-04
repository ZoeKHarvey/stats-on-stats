import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getTeams, getRoster, getPlayer, getTeamSchedule } from '../../actions/index'

jest.mock('../../apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with', () => {
    let teams;
    const mockState = {
      teams
    };

    const expected = {
      teams
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
})

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('calls dispatch with a getTeams action', () => {
      const actionToDispatch = getTeams([{}, {}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getTeams([{}, {}]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a getRoster action', () => {
      const actionToDispatch = getRoster([{}, {}, {}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getRoster([{}, {}, {}]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a getPlayer action', () => {
      const actionToDispatch = getPlayer({});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getPlayer({});
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a getTeamSchedule action', () => {
      const actionToDispatch = getTeamSchedule({});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getTeamSchedule({});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })