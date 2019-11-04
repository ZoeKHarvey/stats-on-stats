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

  render() {
    const {id, name, venue, firstYearOfPlay, division, conference, officialSiteUrl, teamSchedule } = this.props;
    // const teamSchedError = teamSchedule.home.homeTeam || 'No Games Today'
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
            <button >Show Details</button>
            {/* {teamSchedError} */}
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
    favoriteTeams
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(TeamCard);