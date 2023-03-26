import React, { useState, useRef } from "react";

const VolumeSlider = React.forwardRef((props, ref) => {
  const [volume, setVolume] = useState(100);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    ref.current.volume = newVolume / 100;
  };

  return (
    <>
      <div>
        <input
          style={{ width: "100%" }}
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </>
  );
});

export default VolumeSlider;
