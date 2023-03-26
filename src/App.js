import "./App.css";
import Header from "./components/Header/Header";
import DrumPad from "./components/DrumPad/drumPad";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";
import VolumeSlider from "./components/VolumeSlider/VolumeSlider";

function App() {
  const audioRef = useRef();
  return (
    <div className="machine__wrp" id="drum-machine">
      <Header />
      <DrumPad ref={audioRef} />
      <Footer />
      <VolumeSlider ref={audioRef} />
    </div>
  );
}

export default App;
