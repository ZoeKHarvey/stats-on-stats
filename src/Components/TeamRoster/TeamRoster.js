
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

 export const TeamRoster = ({ jerseyNumber, person, position }) => {
   console.log('JERSEY NUMBER', jerseyNumber)
  //  const foundTeam = teams.find(team => team.id === id)
//    const roster = foundTeam.roster.map((team) => {
//      console.log(foundTeam, roster)
//     return team.roster
// })
  //  console.log('ROSTER', roster)
	return (
		<section className='movie_page' >
    {jerseyNumber}
    {person.fullName}
    {position.type} */}
		</section>

	)
}

export const mapStateToProps = (state) => ({
  teams:state.teams
})

export default connect(mapStateToProps)(TeamRoster);