import React, { Component } from 'react';

//import ChildComponent from './ChildComponent'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 5,
      display: '',
      soundBank: [
        {
          key: 'Q',
          urlSound: ''
        }
      ]
    }
  }
  render() {
    return (
      <div id='display' className='flex-container'>
          <h1>FCC Drum Machine!</h1>
          <Display />
          <Control />
          <SoundPads />
      </div>
    );
  }
}

export default App;

