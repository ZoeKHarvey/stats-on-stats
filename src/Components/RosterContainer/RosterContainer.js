import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import RosterCard from '../RosterCard/RosterCard'
import './RosterContainer.scss'

export const RosterContainer = ({roster, getSinglePlayer, teamSchedule}) => {
  console.log('schedule in container-->', teamSchedule)
  const singleRoster = roster.map((roster) => {
    return <RosterCard {...roster}
                        getSinglePlayer = { getSinglePlayer } 
                        teamSchedule = { teamSchedule }
                        />
})

    return(
      <section className="section-rostercontainer">
        {singleRoster}
        { teamSchedule.away.awayTeam }
        { teamSchedule.home.homeTeam }
  
      </section>
    )
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster,
  teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterContainer);