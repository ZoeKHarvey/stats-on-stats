
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

 export class TeamRoster extends Component {

 
  render() {
	return (
		<section className='player'>

		</section>

	)}
}

export const mapStateToProps = (state) => ({
  teams:state.teams
})

export default connect(mapStateToProps)(TeamRoster);