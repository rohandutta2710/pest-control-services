import React from "react";
import ReactDOM from "react-dom";
import RootPage from "./RootPage";
import { BrowserRouter } from "react-router-dom";
import ContextManager from "./ContextManager.jsx";
ReactDOM.render(<BrowserRouter>
  <ContextManager>
    <RootPage />
  </ContextManager>
</BrowserRouter>
  , document.getElementById("root"));