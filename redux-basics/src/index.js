import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import store from "./store/index";
import { Provider } from "react-redux";
//^^notice: it's REACT-redux

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);