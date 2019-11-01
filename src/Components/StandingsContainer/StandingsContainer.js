import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStandings } from '../../apiCalls';
import StandingsCard from '../RosterCard/RosterCard';
import { getStandings, isLoading, hasError } from '../../actions';

class StandingsContainer extends Component {

  componentDidMount = async () => {
    const { getStandings } = this.props;
    try {
      const standings = await fetchStandings();
      getStandings(standings);
    } catch(error) {
      
    }
      
    
  }

 


    render() {
    return(
      <section className="section-teamcontainer">
        <p>hi</p>
    
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