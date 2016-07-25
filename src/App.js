// @flow

import React, { Component } from 'react';
import logo from './logo.svg'; // webpack feature, ignore flow
import './App.css'; //webpack feature, ignore flow

class App extends Component {
  render():void {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h3>Hello World from Surface 4</h3>
        </p>
      </div>
    );
  }
}

export default App;
