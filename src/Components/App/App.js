import { getTeams, isLoading, hasError, getRoster, getPlayer, getTeamSchedule } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams, fetchRoster, fetchPlayer, fetchPlayerStats, fetchTeamSchedule, fetchPlayerProjections } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage'
import NavLogos from '../NavLogos/NavLogos'
import RosterContainer from '../RosterContainer/RosterContainer';
import StandingsContainer from  '../StandingsContainer/StandingsContainer';
import Player from '../Player/Player';
import Footer from '../Footer/Footer';
import FavoritePlayersContainer from '../FavoritePlayersContainer/FavoritePlayersContainer'


export class App extends Component {
  componentDidMount = async () => {
    const { getTeams, hasError, isLoading } = this.props;
    try {
      const teams = await fetchTeams();
      console.log('teams in app--->', teams)
      getTeams(teams);
      // fetchPlayerProjections()
    } catch (error) {
      console.log('error')
    }
  }

  // getSingleRoster = async(e, id) =>{
  //   e.preventDefault()
  //   const { getRoster } = this.props;
  //   try {
  //     const roster = await fetchRoster(id);
  //     getRoster(roster)
  //   } catch(error) {
  //     console.log('error')
  //   }
  // }

  getSinglePlayer = async(e, id) => {
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
    const { getPlayerStats } = this.props;
    try {
      const player = await fetchPlayerStats(id);
      getPlayerStats(this.cleanUpPlayerStats(player))
    } catch(error) {
      console.log('error')
    }
  }
  
  // getSingleTeamSchedule = async(e, id) => {
  //   e.preventDefault();
  //   const { getTeamSchedule }= this.props;
  //   try {
  //     const schedule = await fetchTeamSchedule(id);
  //     console.log('schedule in function', schedule)
  //     getTeamSchedule(this.cleanUpSchedule(schedule))
  //   } catch(error) {
  //     console.log('error')
  //   }
  // }

//   cleanUpSchedule = (schedule) => {
//     return {
//       away: {
//       awayTeam: schedule.teams.away.team.name,
//       awayWins: schedule.teams.away.leagueRecord.wins,
//       awayLosses: schedule.teams.away.leagueRecord.losses,
//       awayOT: schedule.teams.away.leagueRecord.ot },
//       home: {
//         homeTeam: schedule.teams.home.team.name,
//         homeWins: schedule.teams.home.leagueRecord.wins,
//         homeLosses: schedule.teams.home.leagueRecord.losses,
//         homeOT: schedule.teams.home.leagueRecord.ot
//     }
//   }
// }

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

  handlelinkclicks = (e) => {
    e.stopPropagation()
  }

  render() {
    return(
      <section className="section-app">
        <Route exact path='/' render={() => 
          <>
          <WelcomePage getSingleRoster={this.getSingleRoster} />
       
          </>
        }/>
          
        <Route exact path='/teams' render={() => 
        <>
          <TeamContainer 
            getSingleRoster={this.getSingleRoster} 
            getSingleTeamSchedule={this.getSingleTeamSchedule} 
            handlelinkclicks={this.handlelinkclicks}  />
          </>} />

        <Route exact path='/roster' render={() => 
          <>
          <RosterContainer 
            getSinglePlayer={this.getSinglePlayer}  
            /> </>} />

        <Route exact path='/standings' render={() => 
          <StandingsContainer /> } />

        <Route exact path='/player' render={() => 
        <>
          <Player />
          {/* <NavLogos getSingleRoster={this.getSingleRoster}/> */}
          </>} />
        <Route exact path='/favorites' render={() => 
          <FavoritePlayersContainer />}/>

        <Footer />
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
    getPlayer,
    getTeamSchedule
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
