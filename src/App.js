// @flow

import React, { Component } from 'react';
import logo from './logo.svg'; // webpack feature, ignore flow
import './App.css'; //webpack feature, ignore flow

class App extends Component {
  render():void {
    let svg_logo = logo.replace('/', '');
    return (
      <div className="App">
        <div className="App-header">
          <img src={svg_logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
