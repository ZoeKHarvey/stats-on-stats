import React from 'react'

export const TeamCard = (team) => {
  

      return (
         <section className="movie_card"> 
          {team}
        </section>
      )
}   

export const mapStateToProps = (state) => ({
  teams:state.teams,
  errorMsg: state.errorMsg
})

export default TeamCard;