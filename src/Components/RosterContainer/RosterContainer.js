import React from 'react';
import { connect } from 'react-redux';
import RosterCard from '../RosterCard/RosterCard'
import './RosterContainer.scss';
import PropTypes from 'prop-types';

export const RosterContainer = ({roster, getSinglePlayer, teamSchedule}) => {
  const singleRoster = roster.map((roster) => {
    return <RosterCard {...roster}
                        getSinglePlayer = { getSinglePlayer } 
                        teamSchedule = { teamSchedule }
                        />
})
  const homeTeam = teamSchedule.home === undefined ? 'No Games Today' : teamSchedule.home.homeTeam;
  const awayTeam = teamSchedule.away === undefined ? 'No Games Today' : teamSchedule.away.awayTeam;
  const homeWins = teamSchedule.home === undefined ? '' : `Wins: ${teamSchedule.home.homeWins}`;
  const homeLosses = teamSchedule.home === undefined ? '' : `Losses: ${teamSchedule.home.homeLosses}`;
  const homeOT = teamSchedule.home === undefined ? '' : `OTL: ${teamSchedule.home.homeOT}`;
  const awayWins = teamSchedule.away === undefined ? '' : `Wins: ${teamSchedule.away.awayWins}`;
  const awayLosses = teamSchedule.away === undefined ? '' : `Losses: ${teamSchedule.away.awayLosses}`;
  const awayOT = teamSchedule.away === undefined ? '' : `OTL: ${teamSchedule.away.awayOT}`;

    return(
      <section className="section-rostercontainer">
        <div className="roster__container--game">
        <h2 className="roster--h2--game">Today's Game</h2>
        <div className="roster__div--schedule">
          <div className="roster__div--home">
            <h3>Home Team</h3>
          <h3 className="roster__h3--home">{ homeTeam }</h3>
        <h4>{ homeWins }</h4>
        <h4>{ homeLosses }</h4>
        <h4>{ homeOT }</h4>
        </div>
        <div className="roster__div--away">
          <h3>Away Team</h3>
        <h3 className="roster__h3--away">{ awayTeam }</h3>
        <h4>{ awayWins }</h4>
        <h4>{ awayLosses }</h4>
        <h4>{ awayOT }</h4>
        </div>
        </div>
        <h1 className="roster__h1--roster">Roster</h1>
        </div>
        {singleRoster}
      </section>
    )
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster,
  teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterContainer);

RosterContainer.propTypes = {
  teams: PropTypes.array,
  roster: PropTypes.object,
  teamSchedule: PropTypes.object
}