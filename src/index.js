import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.sass";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./stateProvider";
import "./_variables.sass";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
