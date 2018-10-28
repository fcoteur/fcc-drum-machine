import React, { Component } from 'react';

import './App.scss';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 10,
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({volume: e.target.value});
  }

  render() {
    const bank = this.state.soundBank.map((e,i) => {
      const audio = new Audio(e.urlSound);
      audio.volume = this.state.volume /   10;
      return (
        <Button className='drum-pad' id={e.key} key={i} onClick={()=>{audio.play()}}>
          {e.key}
        </Button>
      );
    });

    return (
      <div id='drum-machine' className='container'>

          <div color="primary" id="display" className='display'>
            <h2>{this.state.screenInput}</h2>
          </div>

          <div className="controls slidecontainer">
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={this.state.volume} 
              className="slider"
              onChange={this.handleChange} 
              id="myRange">
            </input>
          </div>
          
          {bank}

      </div>
    );
  }
}

export default App;

