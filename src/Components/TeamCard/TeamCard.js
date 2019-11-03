import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import TeamRoster from '../RosterCard/RosterCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TeamCard.scss';
import { getTeams, isLoading, hasError, getRoster, getPlayer, getTeamSchedule, favoriteTeams } from '../../actions';
import { fetchTeams, fetchRoster, fetchPlayer, fetchPlayerStats, fetchTeamSchedule, fetchPlayerProjections } from '../../apiCalls';
import { Route } from 'react-router-dom';

export class TeamCard extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: this.isFavorited
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

  getSingleTeamSchedule = async(e, id) => {
    e.preventDefault();
    const { getTeamSchedule } = this.props;
    try {
      const schedule = await fetchTeamSchedule(id);
      console.log('schedule in function', schedule)
      getTeamSchedule(this.cleanUpSchedule(schedule))
    } catch(error) {
      console.log('error')
    }
  }

  favoriteTeams = (e, id) => {
    console.log('prrproproprpssss', this.props)
    e.preventDefault()
    const { favoriteTeams } = this.props
    favoriteTeams(id)
  }

  cleanUpSchedule = (schedule) => {
    return {
      away: {
      awayTeam: schedule.teams.away.team.name,
      awayWins: schedule.teams.away.leagueRecord.wins,
      awayLosses: schedule.teams.away.leagueRecord.losses,
      awayOT: schedule.teams.away.leagueRecord.ot },
      home: {
        homeTeam: schedule.teams.home.team.name,
        homeWins: schedule.teams.home.leagueRecord.wins,
        homeLosses: schedule.teams.home.leagueRecord.losses,
        homeOT: schedule.teams.home.leagueRecord.ot
    }
  }
}

  handler = (e, id) => {
    this.getSingleRoster(e, id)
    this.getSingleTeamSchedule(e, id)
    this.favoriteTeams(e, id)
  }

  render() {
    const {id, name, venue, firstYearOfPlay, division, conference, officialSiteUrl } = this.props
      return (
        
         <section className="team-card"> 
          <h2>{name}</h2>
          <h4>HomeTown: {venue.city}</h4>
          <h4>Founded: {firstYearOfPlay}</h4>
          <h4>Stadium: {venue.name}</h4>
          <h4>Division: {division.name}</h4>
          <h4>Conference: {conference.name}</h4>
          {/* {shortName} */}
          <a href={officialSiteUrl}>Official Site</a>
          {/* {franchiseId} */}
          {/* {active} */}
          <Link to='/roster'>
            <button onClick={(e) => this.handler(e, id)}>Show Details</button>
          </Link>
            {/* <h1>rosterrrr</h1> */}
            <button onClick={this.favoriteTeams}>Favorite</button>

          
        </section>
      )
}   }


export const mapStateToProps = (state) => ({
  teams: state.teams,
  errorMsg: state.errorMsg,
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // getTeams,
    // hasError,
    // isLoading,
    getRoster,
    getTeamSchedule,
    favoriteTeams
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(TeamCard);