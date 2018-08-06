import "./errorReporting";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./components/app";
import store from "./store.js";

console.log(store);
/**
 Browser Router is a Higher order component / HOC, it needs to wrap 
 the entire APP Componenr
 **/

const Main = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Main store={store} />, document.getElementById("root"));
