import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard'
import { connect } from 'react-redux';
import RosterCard from '../RosterCard/RosterCard'
import './RosterContainer.scss';
import { fetchRoster, fetchTeamSchedule } from '../../apiCalls'

class RosterContainer extends Component {

  componentDidMount = async () => {
    const {} = this.props;
    try {
      this.getSingleRoster();
      this.getSingleTeamSchedule()
      // fetchPlayerProjections()
    } catch (error) {
      console.log('error')
    }
  }


    getSingleRoster = async(id) =>{
      const { getRoster } = this.props;
      try {
        const roster = await fetchRoster(id);
        getRoster(roster)
      } catch(error) {
        console.log('error')
      }
    }
  
    getSingleTeamSchedule = async(id) => {
      const { getTeamSchedule } = this.props;
      try {
        const schedule = await fetchTeamSchedule(id);
        console.log('schedule in function', schedule)
        getTeamSchedule(this.cleanUpSchedule(schedule))
      } catch(error) {
        return 'No Games Today'
      }
    }
  
    cleanUpSchedule = (schedule) => {
      return {
        away: {
        awayTeam: schedule.teams.away.team.name,
        awayWins: schedule.teams.away.leagueRecord.wins,
        awayLosses: schedule.teams.away.leagueRecord.losses,
        awayOT: schedule.teams.away.leagueRecord.ot },
        home: {
          homeTeam: schedule.teams.home.team.name,
          homeWins: schedule.teams.home.leagueRecord.wins,
          homeLosses: schedule.teams.home.leagueRecord.losses,
          homeOT: schedule.teams.home.leagueRecord.ot
      }
    }
  }
  
    // handleDetails = (e, id) => {
    //   this.getSingleRoster(e, id)
    //   this.getSingleTeamSchedule(e, id)
    // }

populateCards = () => {
  const {roster, getSinglePlayer, teamSchedule } = this.props
  roster.map((roster) => {
    return <RosterCard {...roster}
                        getSinglePlayer = { getSinglePlayer } 
                        teamSchedule = { teamSchedule }
                        />
})
}



    render() {
    return(
      <section className="section-rostercontainer">
        <div className="roster__container--game">
        <h2 className="roster--h2--game">Today's Game</h2>

        {/* <div className="roster__div--schedule">
          <div className="roster__div--home">
            <h3>Home Team</h3>

          <h3 className="roster__h3--home">{ teamSchedule.home.homeTeam }</h3>
        <h4>Wins { teamSchedule.home.homeWins }</h4>
        <h4>Losses{ teamSchedule.home.homeLosses }</h4>
        <h4>OTL: { teamSchedule.home.homeOT}</h4>
        </div>

        <div className="roster__div--away">
          <h3>Away Team</h3>
        <h3 className="roster__h3--away">{ teamSchedule.away.awayTeam }</h3>
        <h4>Wins: { teamSchedule.away.awayWins }</h4>
        <h4>Losses: { teamSchedule.away.awayLosses }</h4>
        <h4>OTL: { teamSchedule.away.awayOT}</h4>
        </div>
        </div> */}
        <h1 className="roster__h1--roster">Roster</h1>
        </div>
        {this.populateCards}
      </section>
    )
}
}


export const mapStateToProps = (state) => ({
  teams: state.teams,
  roster: state.roster,
  teamSchedule: state.teamSchedule
})

export default connect(mapStateToProps)(RosterContainer);