import './RosterCard.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


 export const RosterCard = ({  jerseyNumber, person, position, getSinglePlayer }) => {
  
	return (
		<section className='roster-card'>
    <p className="roster__p--name">{person.fullName}</p>
    <p className="roster__p--number">{jerseyNumber}</p>
    <p className="roster__p--pname">{position.name}</p>
    <Link to='/player'>
    <button className="player__button" onClick={(e) => getSinglePlayer(e, person.id)}>ShowPlayer</button>
    </Link>
		</section>

	)
}

export const mapStateToProps = (state) => ({
  teams:state.teams,
  // teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterCard);