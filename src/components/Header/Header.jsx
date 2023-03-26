import { useState } from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../stateProvider";
import "./display.sass";

const Header = () => {
  const [state, dispatch] = useStateValue();
  const [{ displaySoundName, power }] = useStateValue();
  const [buttonOn, setButtonOn] = useState(false);
  function buttonHandler(params) {
    dispatch({
      type: actionTypes.POWER,
      payload: params,
    });
    setButtonOn(params);
  }
  return (
    <>
      <div className="display" id="display">
        {power ? (
          <button
            style={{ background: "green" }}
            onClick={() => buttonHandler(false)}
          >
            Power ON
          </button>
        ) : (
          <button onClick={() => buttonHandler(true)}>Power OFF</button>
        )}
      </div>
    </>
  );
};

export default Header;
