import React, { Component } from 'react';
import logo from './FB59156C-1783-49BA-98C7-43BA276CFFDD.jpeg';
//import mba from './MBA.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IT`s me Mario</h1>
        </header>
      </div>
    );
  }
}

export default App;
