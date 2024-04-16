import React, { Component } from 'react';
import logo from './logo.svg';
//import mba from './MBA.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to 2024 - 159GTI</h1>
        </header>
      </div>
    );
  }
}

export default App;
