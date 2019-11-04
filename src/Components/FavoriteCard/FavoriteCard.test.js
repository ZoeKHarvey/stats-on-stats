import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteCard } from './FavoriteCard';

describe('FavoriteCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <FavoriteCard />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

