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
  });

  it('should update player state on mouseEnter', () => {
    const expected = {name: 'MyName', age:1}
    const mockEvent = {target: {name: 'MyName', age: 1}}
    wrapper.instance().getPlayer = jest.fn()

    wrapper.instance().getPlayer(mockEvent)
    expect(wrapper.state('player').toEqual(expected))
  })
})


