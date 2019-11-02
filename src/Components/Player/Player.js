import { getPlayerStats, getPlayerProjections } from '../../actions';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { player } from '../../reducers/playerInfo';
import { fetchPlayerStats, fetchPlayerProjections } from '../../apiCalls';

 export class Player extends Component {

  componentDidMount = async () => {
    const { playerInfo, getPlayerStats, getPlayerProjections } = this.props;
    try {
      const stat = await fetchPlayerStats(playerInfo.id);
      const projections = await fetchPlayerProjections(playerInfo.id)
      console.log(projections)
      getPlayerStats(this.organizeStats(stat))
      getPlayerProjections(this.organizeProjections(projections.stat))
      
    } catch (error) {
      console.log('error')
    }
  }

  organizeProjections = (projections) => {
    console.log('projections! -->', projections)
    return {
      assists: projections.assists
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
  playerInfo:state.playerInfo,
  playerProjections:state.playerProjections
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPlayerStats,
    getPlayerProjections
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Player);