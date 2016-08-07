// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import Api from './services/api';
import aca_logo from './images/aca_circle_logo_no_text.png';
import './App.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// import mockData from './data/sample_data.json';
import Commits from './Commits';


class App extends Component {
  state: any;
  students: string[];
  items: any[];

  constructor(props:any) {
    super(props)
    this.state = { users: [], modalIsOpen: false, selectedUser: {} };
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
      'Paxman23l',
      'bbaic'
    ];
    
    this.items = []; // initialize items array

  }
  componentDidMount() {
    this.students.forEach(student => {
      this.processNextStudent(student);
    });
    // this.setState({users:mockData});
  }

  openModal = (user:{name:string, login:string}) => {
    this.setState({ modalIsOpen: true, selectedUser: user });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  processResults() {
    let sorted = _.sortBy(this.items, ['created_at']);
    this.setState({ users: sorted });
  }
  processNextStudent(studentName:string) {
    let api = new Api();
    let url = `https://api.github.com/users/${studentName}?client_id=ba4115563d5eac4f65ba&client_secret=2db9542761f5548f101f8437b07d73cdcda457d6`;
    api.getGithubUser(url).then(data => {
      this.items.push({
        name: data.name,
        avatar: data.avatar_url,
        login: data.login,
        created_at: data.created_at
      })

      if (this.items.length === this.students.length) {
        this.processResults();
      }
    });
  }
  render() {
    // console.log('this.state.modalIsOpen', this.state.modalIsOpen);
    let users = this.state.users;
    let selectedUser = this.state.selectedUser;
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
        <Users users={users} openModal={this.openModal} />
        <Commits modalIsOpen={modalIsOpen} selectedUser={selectedUser} closeModal={this.closeModal} />
      </div>
    );
  }
}

class Users extends Component {
  openModal = (user) => {
    this.props.openModal(user);
  }

  displayUser = (user, key) => {
    let workbook_url = `https://${user.login}.github.io/intro-workbook`;
    const tooltip = (
      <Tooltip id="tooltip"><strong>View Latest Commits</strong></Tooltip>
    );

    return (
      <div key={key}>
        <div className="details">
          <OverlayTrigger placement="top" overlay={tooltip}>
            <span className="mega-octicon octicon-git-commit" onClick={ () => { this.openModal({ name: user.name, login: user.login }) } } ></span>
          </OverlayTrigger>
          
          <span id="username">{user.name} ({user.login}) </span>
        </div>
        <div className="userProfile grow pic" style={{ marginTop: 0 }}>
          <a href={workbook_url} target="_blank"><img src={user.avatar}  alt="profile" /></a>
        </div>
      </div>
    )
  }

  render() {
    let users = this.props.users;
    return (
      <div className="students-container">
        {_.map(users, this.displayUser) }
      </div>
    )
  }

}


export default App;