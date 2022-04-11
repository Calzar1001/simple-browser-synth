import React from "react";
import FreqSlider from "./freqSlider";
import OscType from "./oscType";
import PlayButton from "./playButton";
import VolSlider from "./volSlider";

const Voice = props => (
    <div className='osccontrols'>
        <div>
            <label >Pitch</label>
            <FreqSlider freq={props.freq}
                onFreqChange={props.onFreqChange}
            />
            <label >Volume</label>
            <VolSlider vol={props.vol}
                onVolChange={props.onVolChange}
            />
        </div>
        <div>
            <PlayButton
                playOsc1={props.playOsc}
                stopOsc1={props.stopOsc}
                onTogglePlay={props.onTogglePlay}
            />
            <OscType
                onOscTypeChange={props.onOscTypeChange}
                OscType1={props.type}
            />
        </div>
    </div>
);

export default Voice;