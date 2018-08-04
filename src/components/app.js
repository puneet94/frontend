import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Forgot from "./Forgot";
import Connect from "./Connect";
import "../styles/vendor/bootstrap-v4.0.0-beta.css";

import { Provider } from "react-redux";

import store from "../store";
/**
 *In order for the SPA to work correctly the routes need to be wrapped 
 in Switch component .
 */

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Switch>
          <Route exact={true} path="/" component={Signup} />
          <Route path="/auth/sign-in" component={Signin} />
          <Route path="/auth/sign-up" component={Signup} />
          <Route path="/auth/forgot" component={Forgot} />
          <Route path="/auth/connect" component={Connect} />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
