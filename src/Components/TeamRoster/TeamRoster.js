
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

 export const TeamRoster = ({ roster, id }) => {
	return (
		<section className='movie_page' id={id}>
			{roster.roster}
		</section>

	)
}

export const mapStateToProps = (state) => ({
  teams:state.teams,
})

export default connect(mapStateToProps)(TeamRoster);