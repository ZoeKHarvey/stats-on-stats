import React from 'react'
import { Link } from 'react-router-dom';
import TeamRoster from '../TeamRoster/TeamRoster'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRoster } from '../../actions';

export const TeamCard = ({id, name, venue, teamName, firstYearOfPlay, division, conference, franchise, roster, shortName, officialSiteUrl, franchiseId, active, getSingleRoster}) => {
  console.log('get single roster function', getSingleRoster)

      return (
        
         <section className="movie_card"> 
          <h1>{name}</h1>
          {/* {venue} */}
          {teamName}
          {firstYearOfPlay}
          {/* {division} */}
          {/* {conference} */}
          {/* {franchise} */}
          {shortName}
          <a href={officialSiteUrl}>Official Site</a>
          {franchiseId}
          {active}
          
          {/* <Link to='/roster'> */}
            <button onClick={(e) => getSingleRoster(e, id)}>Team Roster</button>>
          {/* </Link> */}

          
        </section>
      )
}   

export const mapStateToProps = (state) => ({
  teams: state.teams,
  errorMsg: state.errorMsg
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // getTeams,
    // hasError,
    // isLoading,
    getRoster
  }, dispatch)
)
export default connect(mapStateToProps)(TeamCard);