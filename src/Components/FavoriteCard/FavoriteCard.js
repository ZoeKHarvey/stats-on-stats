import React from 'react';

import { connect } from 'react-redux';

export const FavoriteCard = ({fullName}) => {
  console.log('player in fave card-->', fullName)
  return(
    <section>
    <h1>Favorite Player</h1>
    {fullName}
    </section>
  )
}

export default FavoriteCard