
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

 export const TeamRoster = ({ jerseyNumber, person, position }) => {
   console.log('JERSEY NUMBER', jerseyNumber)
  

	return (
		<section className='roster-card' >
      <h1>In Me</h1>
    {jerseyNumber}
    {person.fullName}
    {position.type}}
		</section>

	)
}

export const mapStateToProps = (state) => ({
  teams:state.teams
})

export default connect(mapStateToProps)(TeamRoster);