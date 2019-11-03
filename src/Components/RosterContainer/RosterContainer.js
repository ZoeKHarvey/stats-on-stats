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
        <h3>{ teamSchedule.away.awayTeam }</h3>
        <h4>{ teamSchedule.away.awayWins }</h4>
        <h4>{ teamSchedule.away.awayLosses }</h4>
        <h4>{ teamSchedule.away.awayOT}</h4>

        <h3>{ teamSchedule.home.homeTeam }</h3>
        <h4>{ teamSchedule.home.homeWins }</h4>
        <h4>{ teamSchedule.home.homeLosses }</h4>
        <h4>{ teamSchedule.home.homeOT}</h4>

        
  
      </section>
    )
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster,
  teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterContainer);