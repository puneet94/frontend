import React, { Component } from "react";
import Logo from "../images/logo-3.png";
import illustartion from "../images/signup-login-ill_2x.png";

import SignInForm from "./SignInForm/SignInForm";
class Signin extends Component {
  render() {
    return (
      <div className="display-full">
        <div className="w-100">
          <div className="view-container registrations new">
            <main className="w-100">
              <div className="row" style={{ overflow: "auto" }}>
                <div className="col-8 scrollable">
                  <header className="p-t-50 p-l-50 p-r-50 p-b-20 dis-flex dis-flex-between m-r-0">
                    <div className="logo">
                      <a href="/">
                        <a href="/">
                          <img src={Logo} alt="react" width={90} />
                        </a>
                      </a>
                    </div>
                    <a className="f-14" href="/auth/sign-up">
                      SIGN UP
                    </a>
                  </header>
                  <div className="container mw-560">
                    <h2 className="great-things-await m-b-18">
                      Look, who’s back
                    </h2>
                    <p className="nuel-connects-apps m-b-45">
                      Nuel connects apps to help you reach out to the right
                      audience.
                    </p>
                    <hr className="m-b-30" />
                    <div className="row">
                      <div className="col-12">
                        <SignInForm />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 right-bg dis-flex dis-flex-column illustartion-container">
                  <img className="illustartion" src={illustartion} alt="" />
                  <div className="p-l-60 p-r-60">
                    <h3 className="h21">2X</h3>
                    <p className="is-the-awerage-email m-b-100">
                      is the average growth of open rate after customers start
                      using Nuel
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
