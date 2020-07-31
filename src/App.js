import React, { Component } from 'react';
import Users from './components/Users';
import data from './data';
import './App.css';

const userList = data;

class App extends Component{

  state = userList;

  render(){
    return(
      <div className="App">
        <h1>USERS</h1>
        <div className="userlist"><Users users={this.state.members}/></div>
      </div>
    );
  }
}

export default App;
