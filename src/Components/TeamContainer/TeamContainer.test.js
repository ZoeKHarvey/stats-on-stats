import React from 'react';
import { TeamContainer, mapStateToProps } from './TeamContainer';
import { shallow } from 'enzyme';

describe('TeamContainer', () => {
  let wrapper;

  let teams = [{
    name: 'Veet',
  }];

  beforeEach(() => {
    wrapper = shallow(
      <TeamContainer
        teams={teams}
        />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mockStateToProps', () => {
  it('should return an object with the teams array', () => {
    const mockState = {
      teams: [{name:'Veet'}, {name: 'Doggan'}]
    };
    const expected = {
      teams: [{name:'Veet'}, {name: 'Doggan'}]
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})

