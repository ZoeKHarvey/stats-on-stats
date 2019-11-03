import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getTeams } from '../../actions/index'

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
    })
  })
})