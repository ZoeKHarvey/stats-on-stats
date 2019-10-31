import { getTeams, isLoading, hasError, getRoster, getPlayer } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams, fetchRoster, fetchPlayer } from '../../apiCalls';
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
      const player = await fetchPlayer(id);
      getPlayer(this.cleanUpPlayer(player))
    } catch(error) {
      console.log('error')
    }
  }

  cleanUpPlayer = (player) => {
    return {
      id: player.id,
      fullName: player.fullName,
      active: player.active,
      captain: player.captain,
      height: player.height,
      weight: player.weight,
      birthCity: player.birthCity,
      birthStateProvince: player.birthStateProvince,
      birthCountry: player.birthCountry,
      currentAge: player.currentAge,
      rosterStatus: player.rosterStatus,
      shootsCatches: player.shootsCatches,
      
    }
  }

  render() {
    return(
      <section className="section-app">
        <Route exact path='/' render={() => <WelcomePage /> } />
        <Route exact path='/teams' render={() => <TeamContainer getSingleRoster={this.getSingleRoster}  />} />
        <Route exact path='/roster' render={() => <RosterContainer getSinglePlayer={this.getSinglePlayer} />} />
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
    getRoster,
    getPlayer
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
