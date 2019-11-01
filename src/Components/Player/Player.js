import { getPlayerStats } from '../../actions';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { player } from '../../reducers/playerInfo';
import { fetchPlayerStats } from '../../apiCalls';

 export class Player extends Component {

  componentDidMount = async () => {
    const { playerInfo, getPlayerStats } = this.props;
    try {
      const stat = await fetchPlayerStats(playerInfo.id);
      getPlayerStats(this.organizeStats(stat))
      console.log('stats==>', stat)
    } catch (error) {
      console.log('error')
    }
  }

  organizeStats = (playerInfo) => {
    return {
      assists: playerInfo.assists,
      games: playerInfo.games,
      goals: playerInfo.goals,
      hits: playerInfo.hits,
      pim: playerInfo.pim,
      plusMinus: playerInfo.plusMinus,
      points: playerInfo.points,
      powerPlayPoints: playerInfo.powerPlayPoints,
      shotPct: playerInfo.shotPct,
      shots: playerInfo.shots,
    }
  }
 
  render() {
    const {playerInfo, playerStats} = this.props
    console.log('player stats in render', playerStats)
	return (
		<section className='player'>
      {playerInfo.fullName}
      {playerInfo.active}
      {playerInfo.birthCity}
      {playerInfo.birthCountry}
      {playerInfo.birthStateProvince}
      {playerInfo.captain}
      {playerInfo.currentAge}
      {playerInfo.height}
      {playerInfo.weight}
      {playerInfo.rosterStatus}
      {playerInfo.shootsCatches}
      {playerStats.assists}
      {playerStats.games}
      {playerStats.goals}
      {playerStats.hits}
      {playerStats.pim}
      {playerStats.plusMinus}
      {playerStats.points}
      {playerStats.powerPlayPoints}
      {playerStats.shotPct}
      {playerStats.shots}
		</section>

	)}
}

export const mapStateToProps = (state) => ({
  teams:state.teams,
  playerStats: state.playerStats,
  playerInfo:state.playerInfo
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPlayerStats
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Player);