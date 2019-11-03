import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import TeamRoster from '../RosterCard/RosterCard';
// import ice from '../../images/ice4'
import './TeamContainer.scss'



export const TeamContainer = ({teams, roster, getSingleRoster, getSingleTeamSchedule, handlelinkclicks}) => {
  const alph = teams.sort((a,b) => {
   return a.division.id - b.division.id
  })
  console.log('alphabetized--->', alph)
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
        <h1>Team List</h1>
    
      </section>
    )

}

export const mapStateToProps = (state) => ({
  teams: state.teams
})

export default connect(mapStateToProps)(TeamContainer);