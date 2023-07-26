import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { Global } from "@emotion/react";
import { globalStyles } from "./components/App/global-style";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
