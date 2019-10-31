import { getTeams, isLoading, hasError, getRoster } from '../../actions';
import { bindActionCreators } from 'redux';
import { fetchTeams, fetchRoster } from '../../apiCalls';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer';
import { Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage'
import TeamRoster from '../TeamRoster/TeamRoster';
import StandingsContainer from  '../StandingsContainer/StandingsContainer'

export class App extends Component {
  componentDidMount = async () => {
    const { getTeams, hasError, isLoading } = this.props;
    try {
      const teams = await fetchTeams();
      console.log('teams in app--->', teams)
      getTeams(teams);
    } catch (error) {
      console.log('error')
    }
  }

  getSingleRoster = async(e, id) =>{
    e.preventDefault()
    // const newID =  e.target.id 
    console.log('CHOSEN TEAM', id)
    const { getRoster } = this.props;
    try {
      const rosters = await fetchRoster(id);
      console.log('rosters in app--->', rosters)
      getRoster(rosters)
    } catch(error) {
      console.log('error')
    }
  }

  render() {
    return(
      <section className="section-app">
        <Route exact path='/' render={() => <WelcomePage /> } />
        <Route exact path='/teams' render={() => <TeamContainer getSingleRoster={this.getSingleRoster}  />} />
        <Route exact path='/roster' render={() => <TeamRoster />} />
        <Route exact path='/standings' render={() => <StandingsContainer /> } />
      </section>
    )
  }

}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  errorMsg: state.errorMsg,
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getTeams,
    hasError,
    isLoading,
    getRoster
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
