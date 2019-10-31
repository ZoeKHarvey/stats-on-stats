import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';


export const TeamContainer = ({teams}) => {
  const singleTeams = teams.map((team) => {
    return <TeamCard key={team.id}
                        {...team} />
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