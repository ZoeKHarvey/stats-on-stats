import { getTeams, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Link } from 'react-router-dom';

const  WelcomePage = () => {

    return(
      <section className="section-welcome">
        <Link to='/teams'> 
          <h3>Teams</h3>
        </Link>
        <Link to='/standings'>
          <h3>Standings</h3>
        </Link>
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