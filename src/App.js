/* global $ */

import React, { Component } from 'react';
import _ from 'lodash';
import Api from './services/api';
import aca_logo from './images/aca_circle_logo_no_text.png';
import './App.css';

// import mockData from './data/sample_data.json';
import Commits from './Commits';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {users:[], modalIsOpen: false};
    this.students = [
      'khadijah17',
      'PAJARO1',
      '2104382953',
      'RummenacherK',
      'kiravillarreal',
      'Gualerdz57',
      'dianadiaz',
      'matthcarson01',
      'bdbblowe',
      'Stacihs',
      'robertowebdev',
      'Btace13',
      'Paxman23l'

    ];
    // this.students = [
    //   'robertowebdev',
    //   'dianadiaz'
    // ];
    this.items = [];

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.students.forEach(student=>{
      this.processNextStudent(student);
    });
    // this.setState({users:mockData});

  }

  openModal() {
    
    console.log('inside openModal()');
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  processResults() {    
    let sorted = _.sortBy(this.items, ['created_at']);   
    this.setState({users:sorted});
  }
  processNextStudent(student) {
    let api = new Api();
    let url = `https://api.github.com/users/${student}?client_id=ba4115563d5eac4f65ba&client_secret=2db9542761f5548f101f8437b07d73cdcda457d6`;
    api.getGithubUser(url).then(data=>{
      this.items.push({
        name: data.name,
        avatar: data.avatar_url,
        login: data.login,
        created_at: data.created_at
      })

      if (this.items.length === this.students.length) {
        this.processResults();
        $('[data-toggle="tooltip"]').tooltip() // initialize tooltip
      }
    });
  }
  render() {
    console.log('this.state.modalIsOpen', this.state.modalIsOpen);
    let modalIsOpen = this.state.modalIsOpen;
    return (
      <div className="App">
        <div className="App-header">
          <img src={aca_logo} className="App-logo" alt="logo" />
          <span className="logo_text">ACA</span>
          <h3>Class Roster</h3>
        </div>
        <p className="App-intro">
          San Antonio '16 - Summer Intro
        </p>
        <Users users={this.state.users} openModal={this.openModal} />
        <Commits modalIsOpen={modalIsOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}

class Users extends Component {
  constructor(props) {
    super(props);

    this.displayUser = this.displayUser.bind(this); // see: 'No Autobinding', http://bit.ly/2aQtFXH
    this.showLatestCommits = this.showLatestCommits.bind(this); // see: 'No Autobinding', http://bit.ly/2aQtFXH
  }
  showLatestCommits() {
    this.props.openModal();
  }

  displayUser(user, key) {
    let workbook_url = `https://${user.login}.github.io/intro-workbook`;
    return (
      <div key={key}>
        <div className="details">
          <span className="mega-octicon octicon-git-commit" data-toggle="tooltip" data-placement="top" 
            title="View Latest Commits" onClick={this.showLatestCommits}></span>            
          <span id="username">{user.name} ({user.login})</span>
        </div>
        <div className="userProfile grow pic" style={{marginTop:0}}>
          <a href={workbook_url} target="_blank"><img src={user.avatar}  alt="profile" /></a>
        </div>
      </div>
    )
  }

  render() {
    let users = this.props.users;
    return (
      <div className="students-container">
        {_.map(users, this.displayUser)}
      </div>
    )
  }

}


export default App;