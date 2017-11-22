import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import User from './Components/User';
import users from './json/users.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Passion.io Tech Challenge"/>
        {users.map(function(element, index) {
          return <User key={index} data={element}/>
        })}
      </div>
    );
  }
}

export default App;
