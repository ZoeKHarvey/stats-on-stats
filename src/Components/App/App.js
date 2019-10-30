
import { getRoster } from '../../apiCalls'
import React, { Component } from 'react';
import './App.css';
import TeamContainer from '../TeamContainer/TeamContainer'

export class App extends Component {
  async componentDidMount() {
    await getRoster()
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
