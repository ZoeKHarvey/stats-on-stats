import { getPlayerStats, getPlayerProjections } from '../../actions';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { player } from '../../reducers/playerInfo';
import { fetchPlayerStats, fetchPlayerProjections } from '../../apiCalls';
import './Player.scss'

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
      assists: projections.assists,
      games: projections.games,
      goals: projections.goals,
      hits: projections.hits,
      pim: projections.pim,
      plusMinus: projections.plusMinus,
      points: projections.points,
      powerPlayPoints: projections.powerPlayPoints,
      shotPct: projections.shotPct,
      shots: projections.shots,
      faceOffPct: projections.faceOffPct
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
      faceOffPct: playerInfo.faceOffPct
    }
  }
 
  render() {
    const {playerInfo, playerStats, playerProjections} = this.props
	return (
		<section className='player'>
      <div>
        <h2 className="player__h2--name">{playerInfo.fullName}</h2>
        <ul>
      {/* <li>{playerInfo.active}</li> */}
      <li>{playerInfo.birthCity}, {playerInfo.birthStateProvince}, {playerInfo.birthCountry}</li>
      <li>{playerInfo.captain}</li>
      <li>Age: {playerInfo.currentAge}</li>
      <li>Height: {playerInfo.height}</li>
      <li>Weight: {playerInfo.weight}</li>
      <li>Status: {playerInfo.rosterStatus}</li>
      <li>Left/Right - Handed: {playerInfo.shootsCatches}</li>
      </ul>
      </div>
      <div>
        <ul>
        <li>{playerStats.assists}</li>
        <li>{playerStats.games}</li>
        <li>{playerStats.goals}</li>
        <li>{playerStats.hits}</li>
        <li>{playerStats.pim}</li>
        <li>{playerStats.plusMinus}</li>
        <li>{playerStats.points}</li>
        <li>{playerStats.powerPlayPoints}</li>
        <li>{playerStats.shotPct}</li>
        <li>{playerStats.shots}</li>
        <li>{playerStats.faceOffPct}</li>
      </ul>
      </div>
      <div>
        <ul>
      <li>{playerProjections.assists}</li>
      <li>{playerProjections.games}</li>
      <li>{playerProjections.goals}</li>
      <li>{playerProjections.hits}</li>
      <li>{playerProjections.pim}</li>
      <li>{playerProjections.plusMinus}</li>
      <li>{playerProjections.points}</li>
      <li>{playerProjections.powerPlayPoints}</li>
      <li>{playerProjections.shotPct}</li>
      <li>{playerProjections.shots}</li>
      <li>{playerProjections.faceOffPct}</li>
      </ul>
      </div>
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