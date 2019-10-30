import React from 'react'

export const TeamCard = ({id, name, venue, teamName, firstYearOfPlay, division, conference, franchise, roster, shortName, officialSiteUrl, franchiseId, active}) => {
  

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
          <a>{officialSiteUrl}</a>
          {franchiseId}
          {active}
        </section>
      )
}   

export const mapStateToProps = (state) => ({
  teams:state.teams,
  errorMsg: state.errorMsg
})

export default TeamCard;