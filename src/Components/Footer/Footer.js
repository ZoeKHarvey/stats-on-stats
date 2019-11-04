
import { getTeams, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Link } from 'react-router-dom';
import fullrink from '../../images/full-rink.jpeg'
import './Footer.scss'
import ice from '../../images/ice2.jpg';
import NavLogos from '../NavLogos/NavLogos';



export const  Footer = ({favoritePlayers}) => {
  // const faves = favoritePlayers === undefined ? 0 : favoritePlayers.length
    return(
      <section className="section-footer">
        <div className="footer__div--links">
          <Link to='/' className="footer__a--link">
            <h3>Home</h3>
          </Link>
          <Link to='/teams'className="footer__a--link"> 
            <h3>All Teams</h3>
          </Link>
          <Link to='/favorites' className="footer__a--link">
            <h3>Favorite Players</h3>
          </Link>
        </div>
      </section>
    )
  }

  export const mapStateToProps = (state) => ({
    favoritePlayers: state.favoritePlayers
  });
  

  export default Footer