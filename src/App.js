// @flow

import React, { Component } from 'react';
// import logo from './logo.svg'; // webpack feature, ignore flow
import aca_logo from './images/logo.png';  // webpack feature, ignore flow
import './App.css'; //webpack feature, ignore flow

class App extends Component {
  render():void {
    return (
      <div className="App">
        <div className="App-header">
          <img src={aca_logo} className="App-logo" alt="logo" />
          <h2>Class Roster</h2>
        </div>
        <p className="App-intro">
          <h2>Intro 1 - ACA San Antonio</h2>
        </p>
      </div>
    );
  }
}

export default App;
