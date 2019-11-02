import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import RosterCard from '../RosterCard/RosterCard'
import './RosterContainer.scss'

export const RosterContainer = ({roster, getSinglePlayer}) => {
  console.log('roster in container-->', roster)
  const singleRoster = roster.map((roster) => {
    return <RosterCard {...roster}
                        getSinglePlayer = { getSinglePlayer } 
                        />
})

    return(
      <section className="section-rostercontainer">
        {singleRoster}
  
      </section>
    )
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster
})

export default connect(mapStateToProps)(RosterContainer);