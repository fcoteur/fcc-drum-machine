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
          keyCode: 81,
          name: 'Arabic Percussion 1',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/35[kb]arabicperc3-1.wav.mp3'
        },
        {
          key: 'W',
          keyCode: 87,
          name: 'Arabic Percussion 2',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/29[kb]arabicperc3-2.wav.mp3'
        },
        {
          key: 'E',
          keyCode: 69,
          name: 'Arabic Percussion 3',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/108[kb]arabicperc3-3.wav.mp3'
        },
        {
          key: 'A',
          keyCode: 65,
          name: 'Arabic Percussion 4',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/117[kb]arabicperc3-4.wav.mp3'
        },
        {
          key: 'S',
          keyCode: 83,
          name: 'Arabic Percussion 5',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/46[kb]arabicperc3-5.wav.mp3'
        },
        {
          key: 'D',
          keyCode: 68,
          name: 'Arabic Percussion 6',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/74[kb]arabicperc3-6.wav.mp3'
        },
        {
          key: 'Z',
          keyCode: 90,
          name: 'Arabic Percussion 7',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/80[kb]arabicperc3-7.wav.mp3'
        },
        {
          key: 'X',
          keyCode: 88,
          name: 'Arabic Percussion 8',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/104[kb]arabicperc3-8.wav.mp3'
        },
        {
          key: 'C',
          keyCode: 67,
          name: 'Arabic Percussion 9',
          urlSound: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/27[kb]arabicperc3-9.wav.mp3'
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPressFunction = this.keyPressFunction.bind(this);
  }
  componentDidMount(){
    document.addEventListener("keydown", this.keyPressFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressFunction, false);
  }
  handleChange(e) {
    this.setState({volume: e.target.value});
  }
  keyPressFunction(e) {
    for (let i=0; i<this.state.soundBank.length; i++) {
      if (e.keyCode === this.state.soundBank[i].keyCode) {
        const audio = new Audio(this.state.soundBank[i].urlSound);
        audio.volume = this.state.volume / 10;
        this.setState({screenInput: this.state.soundBank[i].name});
        audio.play();
      }
    }
  }

  render() {
    const bank = this.state.soundBank.map((e,i) => {
      const audio = new Audio(e.urlSound);
      audio.volume = this.state.volume /   10;
      return (
        <Button 
          className='drum-pad' 
          id={e.key} 
          key={i} 
          onClick={()=>{
            audio.play();
            this.setState({screenInput: this.state.soundBank[i].name});
           }
          }>
          {e.key}
          <audio src={e.urlSound} className='clip' id={e.key}></audio>
        </Button>
      );
    });

    return (
      <div id='drum-machine' className='container'>

          <div color="primary" id='display' className='display'>
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

