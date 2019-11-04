import './RosterCard.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


 export const RosterCard = ({  jerseyNumber, person, position, getSinglePlayer }) => {
 
	return (
		<section className='roster-card'>
      <Link to='/player'>
      <button>Show Details</button>
      </Link>
    {jerseyNumber}
    {person.fullName}
    {position.type}
    {position.name}
    <button onClick={(e) => getSinglePlayer(e, person.id)}>ShowPlayer</button>
		</section>

	)
}

export const mapStateToProps = (state) => ({
  teams:state.teams,
  // teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterCard);