import React, { Component } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStandings } from '../../apiCalls';
import StandingsCard from '../TeamRoster/TeamRoster';
import { getStandings, isLoading, hasError } from '../../actions';

class StandingsContainer extends Component {
  componentDidMount = async () => {
    console.log('in component did map', this.props)
    const { getStandings, hasError, isLoading } = this.props;
    try {
      const standings = await fetchStandings();
      console.log('standings in app--->', standings)
      getStandings(standings);
      console.log(this.props)
    } catch (error) {
      console.log('error')
    }
  }


    render() {
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