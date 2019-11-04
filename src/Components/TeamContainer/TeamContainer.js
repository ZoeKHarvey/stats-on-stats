import React from 'react';
import TeamCard from '../TeamCard/TeamCard';
import { connect } from 'react-redux';
import './TeamContainer.scss'

export const TeamContainer = ({teams, getSingleRoster, getSingleTeamSchedule, handlelinkclicks}) => {
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