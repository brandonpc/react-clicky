import React from "react";
// ASK: what is dom needed for again? why isn't it included as part of "react"?
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';

// actually renders entire app. 
ReactDOM.render(<App />, document.getElementById("root"));
// ASK: why is this included in create-react-app?
registerServiceWorker();