import { getTeams, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Link } from 'react-router-dom';
import fullrink from '../../images/full-rink.jpeg'
import './WelcomePage.scss';
// import paint from '../../images/paint.jpg'
import ice from '../../images/ice2.jpg';
import NavLogos from '../NavLogos/NavLogos'


const  WelcomePage = ({getSingleRoster}) => {

    return(
      <section className="section-welcome">
        <h1 className="welcome__h1--title">ICED</h1>
        <img className="section__img--stadium" src={fullrink} alt="nhl stadium" />
        <img className="section__img--paint" src={ice} alt="paint backround" />
        <NavLogos getSingleRoster={getSingleRoster} /> 
      </section>
    )
  }


// export const mapStateToProps = (state) => ({
//   teams: state.teams,
//   errorMsg: state.errorMsg,
// });

// export const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({
//     getTeams,
//     hasError,
//     isLoading
//   }, dispatch)
// )

export default WelcomePage