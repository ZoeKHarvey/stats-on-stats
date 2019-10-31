import React from 'react'
import { Link } from 'react-router-dom';
import TeamRoster from '../TeamRoster/TeamRoster'
import { connect } from 'react-redux'

export const TeamCard = ({id, name, venue, teamName, firstYearOfPlay, division, conference, franchise, roster, shortName, officialSiteUrl, franchiseId, active}) => {
  console.log('id--->', id)
  
      return (
         <section className="movie_card"> 
          <h1>{name}</h1>
          {/* {venue} */}
          {teamName}
          {firstYearOfPlay}
          {/* {division} */}
          {/* {conference} */}
          {/* {franchise} */}
          {/* {roster} */}
          {shortName}
          <a href={officialSiteUrl}>Official Site</a>
          {franchiseId}
          {active}
          <Link to='/roster'>
            <h1>Team Roster</h1>
          </Link>

          
        </section>
      )
}   

export const mapStateToProps = (state) => ({
  teams:state.teams,
  errorMsg: state.errorMsg
})

export default connect(mapStateToProps)(TeamCard);