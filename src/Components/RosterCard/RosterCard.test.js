import React from 'react';
import { shallow } from 'enzyme';
import { RosterCard } from './RosterCard';

describe('RosterCard', () => {
  let wrapper;

  let person = {
    fullName: 'Vito Burrito',
  }

  let position = {
    type: 'Defense'
  }

  beforeEach(() => {
    wrapper = shallow (
      <RosterCard person={person}
                  position={position} />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

