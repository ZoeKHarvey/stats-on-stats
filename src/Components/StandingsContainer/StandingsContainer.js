import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import StandingsCard from '../TeamRoster/TeamRoster'

export const StandingsContainer = ({teams, roster}) => {


    return(
      <section className="section-teamcontainer">
        
    
      </section>
    )

}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  standings: state.standings
})

export default connect(mapStateToProps)(StandingsContainer);