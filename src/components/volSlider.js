import React from "react";

const VolSlider = props => (
    <div>
        <input
            type="range"
            min="-87"
            max="-30"
            value={props.vol}
            onChange={e => {
                props.onVolChange(e.target.value);
            }}
        />
    </div>
);

export default VolSlider;