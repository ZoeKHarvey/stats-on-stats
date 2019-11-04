import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import TeamRoster from '../RosterCard/RosterCard';
import './TeamContainer.scss'

export const TeamContainer = ({teams, roster, getSingleRoster, getSingleTeamSchedule, handlelinkclicks}) => {
  const alph = teams.sort((a,b) => {
   return a.division.id - b.division.id
  })

  const singleTeams = alph.map((al) => {
    return <TeamCard key={al.id}
                        {...al}
                        getSingleRoster={getSingleRoster} 
                        getSingleTeamSchedule={getSingleTeamSchedule}
                        handlelinkclicks={handlelinkclicks}
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