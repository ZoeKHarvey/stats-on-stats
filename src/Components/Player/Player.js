import { getPlayerStats, getPlayerProjections, favoritePlayer } from '../../actions';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { player } from '../../reducers/playerInfo';
import { fetchPlayerStats, fetchPlayerProjections } from '../../apiCalls';
import './Player.scss';
import ice from '../../images/ice6.jpg'

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

  favoriteAPlayer = (e, id) => {
    e.preventDefault();
    const { favoritePlayer } = this.props;
    favoritePlayer(id)
  }
 
  render() {
    const {playerInfo, playerStats, playerProjections} = this.props
	return (
		<section className='player'>
      <img class="player__img--ice" src={ice} alt="Ice"></img>
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
        <h4>Current Season Stats</h4>
        <ul>
        <li>Assists: {playerStats.assists}</li>
        <li>Games Played: {playerStats.games}</li>
        <li>Goals: {playerStats.goals}</li>
        <li>Hits: {playerStats.hits}</li>
        <li>Penalties In Minutes: {playerStats.pim}</li>
        <li>Plus/Minus: {playerStats.plusMinus}</li>
        <li>Total Points: {playerStats.points}</li>
        <li>Powerplay Points:{playerStats.powerPlayPoints}</li>
        <li>Shooting Percentage:{playerStats.shotPct}</li>
        <li>Shots Taken: {playerStats.shots}</li>
        <li>FaceOff Percentage: {playerStats.faceOffPct}</li>
      </ul>
      </div>
      <div>
          <h4>Projected Stats</h4>
        <ul>
      <li>Assists: {playerProjections.assists}</li>
      <li>Games Played: {playerProjections.games}</li>
      <li>Goals: {playerProjections.goals}</li>
      <li>Hits: {playerProjections.hits}</li>
      <li>Penalties In Minutes: {playerProjections.pim}</li>
      <li>Plus/Minus: {playerProjections.plusMinus}</li>
      <li>Total Points: {playerProjections.points}</li>
      <li>Powerplay Points: {playerProjections.powerPlayPoints}</li>
      <li>Shot Percentage: {playerProjections.shotPct}</li>
      <li>Shots Taken: {playerProjections.shots}</li>
      <li>FaceOff Percentage: {playerProjections.faceOffPct}</li>
      </ul>
      </div>
      <button onClick={(e) => this.favoriteAPlayer(e, playerInfo.id)}>Favorite</button>
		</section>

	)}
}

export const mapStateToProps = (state) => ({
  // teams:state.teams,
  playerStats: state.playerStats,
  playerInfo:state.playerInfo,
  playerProjections:state.playerProjections
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPlayerStats,
    getPlayerProjections,
    favoritePlayer
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Player);