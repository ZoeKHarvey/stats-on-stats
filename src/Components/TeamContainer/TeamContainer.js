import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import TeamRoster from '../RosterCard/RosterCard'



export const TeamContainer = ({teams, roster, getSingleRoster}) => {
  const singleTeams = teams.map((team) => {
    return <TeamCard key={team.id}
                        {...team}
                        getSingleRoster={getSingleRoster} 
                         />
})

    return(
      <section className="section-teamcontainer">
        {singleTeams}
    
      </section>
    )

}

export const mapStateToProps = (state) => ({
  teams: state.teams
})

export default connect(mapStateToProps)(TeamContainer);