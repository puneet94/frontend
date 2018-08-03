import React, { Component } from "react";
import illustartion from "../images/signup-login-ill_2x.png";

import SignUpForm from "./SignUpForm/SignUpForm";

class Signup extends Component {
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
                          <img src="" alt="react" width={90} />
                        </a>
                      </a>
                    </div>
                    <a className="f-14" href="/auth/sign-in">
                      LOGIN
                    </a>
                  </header>
                  <div className="container mw-560">
                    <h2 className="great-things-await">Great things await</h2>
                    <p className="nuel-connects-apps">
                      Nuel connects apps to help you reach out to the right
                      audience.
                    </p>
                    <hr />
                    <SignUpForm />
                  </div>
                </div>
                <div className="col-4 right-bg dis-flex dis-flex-column illustartion-container">
                  <img className="illustartion" src={illustartion} alt="" />

                  <div className="p-l-60 p-r-60">
                    <h3 className="h21">21%</h3>
                    <p className="is-the-awerage-email m-b-100">
                      is the average email open rate according to Mailchimp
                      Research. Nuel helps you show your message to everyone
                      else.
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

export default Signup;
