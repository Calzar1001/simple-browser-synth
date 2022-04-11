import React from 'react';
import './App.css';
import Voice from './components/voice';
import Header from './components/header';
import * as Tone from "tone";

//Audio
//OSC
// Create an audio oscillator
const osc = new Tone.Oscillator();
//freqncy or pitch of the oscillator;
osc.frequency.value = 160;
// connect osc to the computers audio output.
osc.toDestination().volume.value = -80;

//OSCILLATIOR FUNCTIONS
//Play Osc
function playOsc() {
  osc.start();
}
//Stop Osc
function stopOsc() {
  osc.stop();
}

function changeFreq(freq) {
  osc.frequency.value = freq;
}

function changeVol(vol) {
  osc.volume.value = vol;
}

function changeOscType(oscType) {
  osc.type = oscType
}


export default class App extends React.PureComponent {


  onTogglePlay = () => {
    this.setState(
      prior => ({
        isPlaying: !prior.isPlaying
      }),
      () => {
        if (!this.state.isPlaying) {
          //stop 
          stopOsc();
          console.log("stopped");
        } else {
          // start
          playOsc();
          console.log("playing");
        }
      }
    );
  };

  onOscTypeChange = oscType => {
    this.setState(
      {
        oscType
      },
      () => {
        changeOscType(oscType);
        console.log("OscType: " + oscType);
      }
    );
  };

  onFreqChange = freq => {
    this.setState(
      {
        freq
      },
      () => {
        changeFreq(freq);
        console.log("Freq: " + freq);
      }
    );
  };

  onVolChange = vol => {
    this.setState(
      {
        vol
      },
      () => {
        changeVol(vol);
        console.log("Volume: " + vol);
      }
    );
  };

  render() {
    return (

      <div className='container'>
        <Header />
        <Voice
          playOsc1={this.playOsc}
          stopOsc1={this.stopOsc}
          onTogglePlay={this.onTogglePlay}

          onFreqChange={this.onFreqChange}
          freq={this.props.freq}

          onVolChange={this.onVolChange}
          vol={this.props.vol}

          onOscTypeChange={this.onOscTypeChange}
          OscType1={this.props.type}
        />
      </div>
    );
  }
}

