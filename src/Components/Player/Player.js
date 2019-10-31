
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { player } from '../../reducers/player';

 export class TeamRoster extends Component {

 
  render() {
    const {player} = this.props
	return (
		<section className='player'>
      {player.fullName}
      {player.active}
      {player.birthCity}
      {player.birthCountry}
      {player.birthStateProvince}
      {player.captain}
      {player.currentAge}
      {player.height}
      {player.weight}
      {player.rosterStatus}
      {player.shootsCatches}

		</section>

	)}
}

export const mapStateToProps = (state) => ({
  teams:state.teams,
  player:state.player
})

export default connect(mapStateToProps)(TeamRoster);