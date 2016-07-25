import React, { Component } from 'react';
import _ from 'lodash';
import Api from './services/api';
import aca_logo from './images/aca_circle_logo_no_text.png';  // webpack feature, ignore flow
import './App.css'; //webpack feature, ignore flow

// import mockData from './data/sample_data.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={aca_logo} className="App-logo" alt="logo" />
          <span className="logo_text">ACA</span>
          <h3>Class Roster</h3>
        </div>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, mollitia aliquam nam perferendis libero eum commodi facilis quos qui cupiditate atque praesentium earum, pariatur rerum reprehenderit saepe rem aspernatur quod.
        </p>
        <Users/>        
      </div>
    );
  }
}

class Users extends Component {  
  constructor(props) {
    super(props)
    this.state = {users:[]};
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
  } 
  componentDidMount() {
    this.students.forEach(student=>{        
      this.processNextStudent(student);        
    });
    // this.setState({users:mockData});
    
  }

  processResults() {
    // data is ready to view
    console.log(JSON.stringify(this.items,null,4));
    this.setState({users:this.items});
  }
  processNextStudent(student) {    
    let api = new Api();
    let url = `https://api.github.com/users/${student}?client_id=ba4115563d5eac4f65ba&client_secret=2db9542761f5548f101f8437b07d73cdcda457d6`;
    api.getGithubUser(url).then(data=>{
      this.items.push({
        name: data.name,
        avatar: data.avatar_url,
        login: data.login
      })

      if (this.items.length === this.students.length) {
        this.processResults();    
      }
    });
  }

  displayUser(user, key) {
    let workbook_url = `https://${user.login}.github.io/intro-workbook`;
    return (
      <div key={key}>
        <div className="details">
          <span id="username">{`${user.name?user.name:''} (${user.login})`}</span>
        </div>
        <div className="userProfile grow pic" style={{marginTop:5}}>
          <a href={workbook_url} target="_blank"><img src={user.avatar}  alt="profile image" /></a>
        </div>            
      </div>
    )
  }

  render() {
    let users = this.state.users;
    return (
      <div className="students-container">
        {_.map(users, this.displayUser)}
      </div>
    )
  }
  
}


export default App;
