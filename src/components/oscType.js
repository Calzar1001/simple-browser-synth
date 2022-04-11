import React from "react";

// Array of Osc types
const oscType = [
  { id: "1", type: "sine" },
  { id: "2", type: "square" },
  { id: "3", type: "sawtooth" },
  { id: "4", type: "triangle" },
];


const OscType = props => (
  <div>
    <label>Osc types</label>
    <br />
    {/* Type of oscillator */}
    <select value={props.type}
      onChange={e => {
        props.onOscTypeChange(e.target.value);
      }}>

      {oscType.map((oscType) => (
        <option key={oscType.id.pro}>{oscType.type}</option>
      ))}
    </select>
  </div>
);

export default OscType;