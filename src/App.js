// @flow

import React, { Component } from 'react';
// import logo from './logo.svg'; // webpack feature, ignore flow
import aca_logo from './images/aca_circle_logo_no_text.png';  // webpack feature, ignore flow
import './App.css'; //webpack feature, ignore flow

class App extends Component {
  render():void {
    return (
      <div className="App">
        <div className="App-header">
          <img src={aca_logo} className="App-logo" alt="logo" />
          <span id="logo_text">ACA</span>
          <h3>Class Roster</h3>
        </div>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, mollitia aliquam nam perferendis libero eum commodi facilis quos qui cupiditate atque praesentium earum, pariatur rerum reprehenderit saepe rem aspernatur quod.
        </p>
      </div>
    );
  }
}

export default App;
