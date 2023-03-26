import "./pad.sass";
import React, { useEffect, useRef } from "react";
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";

const Pad = React.forwardRef((props, ref) => {
  const padRef = useRef();
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [{ displaySoundName, power }] = useStateValue();
  const handlePad = () => {
    if (power) {
      ref.current.currentTime = 0;
      ref.current.play();
      lightenPad();
      dispatch({
        type: actionTypes.SET_DISPLAY,
        soundName: props.id,
      });
    }
  };

  const handleKey = (e) => {
    if (e.keyCode === props.keyCode) {
      ref.current.currentTime = 0;
      ref.current.play();
      lightenPad();
      dispatch({
        type: actionTypes.SET_DISPLAY,
        soundName: props.id,
      });
    }
  };

  const lightenPad = () => {
    padRef.current.classList.add("active");
    setTimeout(() => {
      padRef.current.classList.remove("active");
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <div className="pad" key={props.idx} onClick={handlePad} ref={padRef}>
      <audio
        ref={ref}
        src={props.url}
        id={props.keyTrigger}
        className="clip"
      ></audio>
      <div className="pad__info">
        <span className="pad__key">{props.keyChar}</span>
      </div>
    </div>
  );
});

export default Pad;
