import React from 'react';
import './FavoriteCard.scss';

export const FavoriteCard = ({fullName}) => {
  return(
    <section>
    <li>{fullName}</li>
    </section>
  );
};

export default FavoriteCard;

