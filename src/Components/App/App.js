import { getTeams, isLoading, hasError, getRoster } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams, fetchRoster } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage'
import RosterContainer from '../RosterContainer/RosterContainer';
import StandingsContainer from  '../StandingsContainer/StandingsContainer'

export class App extends Component {
  componentDidMount = async () => {
    const { getTeams, hasError, isLoading } = this.props;
    try {
      const teams = await fetchTeams();
      console.log('teams in app--->', teams)
      getTeams(teams);
    } catch (error) {
      console.log('error')
    }
  }

  getSingleRoster = async(e, id) =>{
    e.preventDefault()
    const { getRoster } = this.props;
    try {
      const roster = await fetchRoster(id);
      getRoster(roster)
    } catch(error) {
      console.log('error')
    }
  }

  getSinglePlayer = async(e, id) => {
    e.preventDefault();
    const { getPlayer } = this.props;
    try {
      const player = await fetchSinglePlayer(id);
      getPlayer(player)
    } catch(error) {
      console.log('error')
    }
  }

  render() {
    return(
      <section className="section-app">
        <Route exact path='/' render={() => <WelcomePage /> } />
        <Route exact path='/teams' render={() => <TeamContainer getSingleRoster={this.getSingleRoster}  />} />
        <Route exact path='/roster' render={() => <RosterContainer />} />
        <Route exact path='/standings' render={() => <StandingsContainer /> } />
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
    isLoading,
    getRoster
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
