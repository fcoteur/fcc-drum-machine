import React, { Component } from 'react';

import Display from './Display';
import Controls from './Controls';
import SoundPads from './SoundPads';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 5,
      screenInput: 'FCC Drum Machine!',
      soundBank: [
        {
          key: 'Q',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/35[kb]arabicperc3-1.wav.mp3'
        },
        {
          key: 'W',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/29[kb]arabicperc3-2.wav.mp3'
        },
        {
          key: 'E',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/108[kb]arabicperc3-3.wav.mp3'
        },
        {
          key: 'A',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/117[kb]arabicperc3-4.wav.mp3'
        },
        {
          key: 'S',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/46[kb]arabicperc3-5.wav.mp3'
        },
        {
          key: 'D',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/74[kb]arabicperc3-6.wav.mp3'
        },
        {
          key: 'Z',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/80[kb]arabicperc3-7.wav.mp3'
        },
        {
          key: 'X',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/104[kb]arabicperc3-8.wav.mp3'
        },
        {
          key: 'C',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/27[kb]arabicperc3-9.wav.mp3'
        }
      ]
    }
  }
  render() {
    return (
      <div id='drum-machine' className='container'>
          <Display screenInput={this.state.screenInput}/>
          <Controls power={this.state.power} volume={this.state.volume}/>
          <SoundPads soundBank={this.state.soundBank}/>
      </div>
    );
  }
}

export default App;

