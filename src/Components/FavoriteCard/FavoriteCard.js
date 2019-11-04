import React from 'react';
import './FavoriteCard.scss'

import { connect } from 'react-redux';

export const FavoriteCard = ({fullName}) => {
  return(
    <section>
    <li>{fullName}</li>
    </section>
  )
}

export default FavoriteCard