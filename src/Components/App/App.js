import { getTeams, isLoading } from '../../actions';
import { fetchTeams } from '../../apiCalls'
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer'

export class App extends Component {
  async componentDidMount() {
    const { getMovies, hasError, isLoading } = this.props;
    try {
      isLoading(true);
      const movies = await fetchTeams();
      isLoading(false)
      getMovies(movies);
    } catch (error) {
      hasError(error.message)
    }
  }

  render() {
    return(
      <section className="section-app">
        <TeamContainer />
      </section>
    )
  }

}

export default App;
