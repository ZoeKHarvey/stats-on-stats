import React from 'react'
import { Link } from 'react-router-dom';
import TeamRoster from '../RosterCard/RosterCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRoster, getTeamSchedule } from '../../actions';
import './TeamCard.scss'

export const TeamCard = ({id, name, venue, firstYearOfPlay, division, conference, officialSiteUrl, franchiseId, active, getSingleRoster, getSingleTeamSchedule, handlelinkclicks}) => {
  console.log('get single roster function', getSingleRoster)

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
            <button onClick={(e) => getSingleTeamSchedule(e, id)}>Schedule</button>
          <Link to='/roster' onClick={handlelinkclicks}>
            <button onClick={(e) => getSingleRoster(e, id)}>Team Roster</button>
          </Link>
            {/* <h1>rosterrrr</h1> */}

          
        </section>
      )
}   

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
    getTeamSchedule
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(TeamCard);