import "./errorReporting";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./components/app";

/**
 Browser Router is a Higher order component / HOC, it needs to wrap 
 the entire APP Componenr
 **/

const Main = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
