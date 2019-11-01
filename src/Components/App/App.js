import { getTeams, isLoading, hasError, getRoster, getPlayer } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams, fetchRoster, fetchPlayer, fetchPlayerStats } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage'
import NavLogos from '../NavLogos/NavLogos'
import RosterContainer from '../RosterContainer/RosterContainer';
import StandingsContainer from  '../StandingsContainer/StandingsContainer';
import Player from '../Player/Player'

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
    this.getSinglePlayerStats(e, id)
    const { getPlayer } = this.props;
    try {
      const player = await fetchPlayer(id);
      getPlayer(this.cleanUpPlayer(player))
    } catch(error) {
      console.log('error')
    }
  }

  getSinglePlayerStats = async(e, id) => {
    e.preventDefault();
    const { getPlayerStats } = this.props;
    try {
      const player = await fetchPlayerStats(id);
      getPlayerStats(this.cleanUpPlayerStats(player))
    } catch(error) {
      console.log('error')
    }
  }
  /// Leaving off on single player stats being fetched

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
        <Route exact path='/' render={() => 
          <>
          <WelcomePage />
          <NavLogos /> 
          </>
        }
          />
          
        <Route exact path='/teams' render={() => <TeamContainer getSingleRoster={this.getSingleRoster}  />} />
        <Route exact path='/roster' render={() => <RosterContainer getSinglePlayer={this.getSinglePlayer} />} />
        <Route exact path='/standings' render={() => <StandingsContainer /> } />
        <Route exact path='/player' render={() => <Player />} />
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
