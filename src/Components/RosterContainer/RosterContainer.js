import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import RosterCard from '../RosterCard/RosterCard'
import './RosterContainer.scss'

export const RosterContainer = ({roster, getSinglePlayer, teamSchedule}) => {
  console.log('roster in container-->', roster)
  const singleRoster = roster.map((roster) => {
    return <RosterCard {...roster}
                        getSinglePlayer = { getSinglePlayer } 
                        teamSchedule = { teamSchedule }
                        />
})
  const homeTeam = teamSchedule.home === undefined ? '' : teamSchedule.home.homeTeam;
  const awayTeam = teamSchedule.away === undefined ? '' : teamSchedule.away.awayTeam
  // const 
  

    return(
      <section className="section-rostercontainer">
        <div className="roster__container--game">
        <h2 className="roster--h2--game">Today's Game</h2>

        {homeTeam}
        {awayTeam}
        {/* <div className="roster__div--schedule">
          <div className="roster__div--home">
            <h3>Home Team</h3>
          <h3 className="roster__h3--home">{ teamSchedule.home.homeTeam }</h3>
        <h4>Wins { teamSchedule.home.homeWins }</h4>
        <h4>Losses{ teamSchedule.home.homeLosses }</h4>
        <h4>OTL: { teamSchedule.home.homeOT}</h4>
        </div>
        <div className="roster__div--away">
          <h3>Away Team</h3>
        <h3 className="roster__h3--away">{ teamSchedule.away.awayTeam }</h3>
        <h4>Wins: { teamSchedule.away.awayWins }</h4>
        <h4>Losses: { teamSchedule.away.awayLosses }</h4>
        <h4>OTL: { teamSchedule.away.awayOT}</h4>
        </div>
        </div> */}
        <h1 className="roster__h1--roster">Roster</h1>
        </div>
        {singleRoster}
      </section>
    )
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster,
  teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterContainer);