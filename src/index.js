import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

registerServiceWorker();
