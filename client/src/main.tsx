import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { Global } from "@emotion/react";
import { globalStyles } from "./components/App/global-style";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
