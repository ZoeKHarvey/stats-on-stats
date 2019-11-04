import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStandings } from '../../apiCalls';
import StandingsCard from '../RosterCard/RosterCard';
import { getStandings, isLoading, hasError } from '../../actions';

class StandingsContainer extends Component {



  componentDidMount = async () => {
    console.log('in component did map', this.props)
    const { getStandings, hasError, isLoading } = this.props;
    try {
      const standings = await fetchStandings();
      getStandings(standings);
    } catch (error) {
      console.log('error')
    }
  }

  // const structureRoster = () => {
   
  // }


    render() {
      const {standings} = this.props
      const mappedStandings = standings.map(stand => stand.teamRecords)
      console.log('mapped in render--->', mappedStandings)
      const anothermap = mappedStandings.forEach((stand) => {
        console.log(stand)
        return stand.map(st => st.row)
      })
      console.log(anothermap)
    return(
      <section className="section-teamcontainer">
        
    
      </section>
    )}

}


export const mapStateToProps = (state) => ({
  teams: state.teams,
  standings: state.standings
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    hasError,
    isLoading,
    getStandings
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StandingsContainer);