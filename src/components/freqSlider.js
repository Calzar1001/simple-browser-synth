import React from "react";

const FreqSlider = props => (
  <div>
    <input
      type="range"
      min="60"
      max="640"
      value={props.freq}
      onChange={e => {
        props.onFreqChange(e.target.value);
      }}
    />
  </div>
);

export default FreqSlider;