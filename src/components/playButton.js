import React from "react";

const PlayButton = props => (
    <div onClick={props.onTogglePlay}>

        <button id='play' onClick={props.playOsc}>Play Osc</button>
        <button id='stop' onClick={props.stopOsc}>Stop Osc</button>
    </div >
);

export default PlayButton;