import { useStateValue } from "../../stateProvider";
import "./display.sass";

const Footer = () => {
  const [{ displaySoundName, power }] = useStateValue();
  return (
    <>
      <div className="display" id="display">
        <h2>{displaySoundName}</h2>
      </div>
    </>
  );
};

export default Footer;
