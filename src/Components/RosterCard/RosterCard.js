
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

 export const TeamRoster = ({  jerseyNumber, person, position, getSinglePlayer }) => {
   console.log('JERSEY NUMBER', jerseyNumber)

	return (
		<section className='roster-card' >
      <Link to='/player'>
      <button>Show Details</button>
      </Link>
    {jerseyNumber}
    {person.fullName}
    {position.type}
    <button onClick={(e) => getSinglePlayer(e, person.id)}>ShowPlayer</button>
		</section>

	)
}

export const mapStateToProps = (state) => ({
  teams:state.teams
})

export default connect(mapStateToProps)(TeamRoster);