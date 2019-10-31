import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import RosterCard from '../RosterCard/RosterCard'

export const RosterContainer = ({roster}) => {
  console.log('roster in container-->', roster)
  const singleRoster = roster.map((roster) => {
    return <RosterCard {...roster} />
})

    return(
      <section className="section-teamcontainer">
        {singleRoster}
  
      </section>
    )
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster
})

export default connect(mapStateToProps)(RosterContainer);