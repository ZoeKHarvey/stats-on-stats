import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'


export const TeamContainer = ({teams}) => {
//   const loopTeams = teams.map((team) => {
//     return <TeamCard key={team.id}
//                         {...team} />
// })

    return(
      <section className="section-teamcontainer">
        {/* {loopTeams} */}
      </section>
    )

}

export const mapStateToProps = (state) => ({
  teams: state.teams
})

export default TeamContainer;