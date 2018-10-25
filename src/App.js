import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />
        <DrumPads />
        <Commands />
      </div>
    );
  }
}

export default App;
