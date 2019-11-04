import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { connect } from 'react-redux';
import './FavoritePlayersContainer.scss'

export const FavoritePlayersContainer = ({teamSchedule, getSinglePlayer, favoritePlayers}) => {
  const player = favoritePlayers.map((player) => {
    console.log('player in fave container --->', player)
    return <FavoriteCard {...player}
                        getSinglePlayer = { getSinglePlayer } 
                        teamSchedule = { teamSchedule }
                        />
})

return(
  <section className="favorite__player--container">
  <h1>Favorite Players</h1>
  {player}
  </section>
)
}

export const mapStateToProps = (state) => ({
  roster: state.roster,
  teamSchedule: state.teamSchedule,
  favoritePlayers: state.favoritePlayers
})

export default connect(mapStateToProps)(FavoritePlayersContainer)