import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TeamCard.scss';
import { getTeams, isLoading, hasError, getRoster, getPlayer, getTeamSchedule } from '../../actions';
import { fetchTeams, fetchRoster, fetchPlayer, fetchPlayerStats, fetchTeamSchedule, fetchPlayerProjections } from '../../apiCalls';
import { Route } from 'react-router-dom';

export class TeamCard extends Component {

  getSingleRoster = async(id) =>{
    const { getRoster } = this.props;
    try {
      const roster = await fetchRoster(id);
      getRoster(roster)
    } catch(error) {
      return 'Roster Not Available'
    }
  }

  getSingleTeamSchedule = async(id) => {
    const { getTeamSchedule } = this.props;
    try {
      const schedule = await fetchTeamSchedule(id);
      getTeamSchedule(this.cleanUpSchedule(schedule))
    } catch(error) {
      return 'No Games Today'
    }
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

  handleDetails = (e, id) => {
    this.getSingleRoster(id)
    this.getSingleTeamSchedule(id)
    // this.favoriteTeam(e, id)
  }

  render() {
    const {id, name, venue, firstYearOfPlay, division, conference, officialSiteUrl } = this.props;
    // const teamSchedError = teamSchedule || 'No Games Today'
      return (
         <section className="team-card" > 
          <h2>{name}</h2>
          <a href={officialSiteUrl}>Official Site</a>
          <h4>HomeTown: {venue.city}</h4>
          <h4>Founded: {firstYearOfPlay}</h4>
          <h4>Stadium: {venue.name}</h4>
          <h4>Division: {division.name}</h4>
          <h4>Conference: {conference.name}</h4>
          <Link to='/roster' >
            <button className="teamcard__button--details" onMouseEnter={(e) => this.handleDetails(e, id)}>Show Details</button>
          </Link>
        </section>
      )
}   }


export const mapStateToProps = (state) => ({
  teams: state.teams,
  errorMsg: state.errorMsg,
  teamSchedule: state.teamSchedule
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getRoster,
    getTeamSchedule,
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(TeamCard);