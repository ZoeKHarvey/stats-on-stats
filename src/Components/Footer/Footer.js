import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

export const Footer = () => {
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