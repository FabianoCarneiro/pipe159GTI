import React, { Component } from 'react';
import logo from './logo.svg';
//import mba from './MBA.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Feature Prof</h1>
        </header>
      </div>
    );
  }
}

export default App;
