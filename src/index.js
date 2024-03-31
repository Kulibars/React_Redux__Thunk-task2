import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./jsonServer/main";
import { Provider } from "react-redux";
import { store } from "./jsonServer/redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);
