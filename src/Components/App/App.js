import { getTeams, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage'
import TeamRoster from '../TeamRoster/TeamRoster';
import StandingsContainer from 

export class App extends Component {
  componentDidMount = async () => {
    const { getTeams, hasError, isLoading } = this.props;
    try {
      const teams = await fetchTeams();
      console.log('teams in app--->', teams)
      getTeams(teams);
      console.log(this.props)
    } catch (error) {
      console.log('error')
    }
  }

  render() {
    return(
      <section className="section-app">
        <Route exact path='/' render={() => <WelcomePage /> } />
        <Route exact path='/teams' render={() => <TeamContainer />} />
        <Route exact path='/roster' render={() => <TeamRoster />} />
        <Route exact path='./standings' render={() => <StandingsContainer /> } />
      </section>
    )
  }

}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  errorMsg: state.errorMsg,
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getTeams,
    hasError,
    isLoading
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
