import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import flyers from '../../images/flyers.png'

export const NavLogo = () => {

return(
  <nav>
    <img src={flyers} alt="flyers logo link to team page"/>
  </nav>
)

}

export default NavLogo
