import Pad from "../Pad/pad";
import "./drumPad.sass";
import { soundBank } from "../../data/soundBank";
import React from "react";

const DrumPad = React.forwardRef((props, ref) => {
  return (
    <div className="drumPad">
      {soundBank &&
        soundBank.map((pad, idx) => (
          <Pad
            ref={ref}
            key={idx}
            id={pad.id}
            url={pad.url}
            keyCode={pad.keyCode}
            keyChar={pad.keyChar}
          />
        ))}
    </div>
  );
});

export default DrumPad;
