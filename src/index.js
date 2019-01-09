import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import fortniteReducer from "./reducers/fortniteReducer";
import Fortnite from "./components/Fortnite";
import "./app.css";

render(
  <Provider store={createStore(fortniteReducer)}>
    <Fortnite />
  </Provider>,
  document.querySelector("#root")
);
