import React, { Component } from 'react';

import logo from './cachorroPolvo.jpg';

//import mba from './MBA.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OctoCat é o KCT é nois Cachorro!</h1>
        </header>
      </div>

     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Chapolin</h3>
          <img className='chapolin' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHgVLIIckBHJhuPy2q0RPmF5f2bz4EkRS3z0m0QxykA&s" alt="Chapolin"></img>
        <h1 className="App-title"> Não contavam com a minha astúcia :) </h1>
      </header>
    </div>
</>

    );
  }
}

export default App;
