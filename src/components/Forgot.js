import React, { Component } from "react";
import Logo from "../images/logo-3.png";
import illustartion from "../images/signup-login-ill_2x.png";
class Forgot extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="view-container registrations new">
          <main className="w-100">
            <div className="row">
              <div className="col-8 scrollable">
                <header className="p-t-50 p-l-50 p-r-50 p-b-20 dis-flex dis-flex-between m-r-0">
                  <div className="logo">
                    <a href="/">
                      <img src={Logo} width={90} />
                    </a>
                  </div>
                  <a className="f-14" href="/auth/sign-up">
                    SIGN UP
                  </a>
                </header>
                <div className="container mw-560">
                  <h2 className="great-things-await">Forgot your password?</h2>
                  <p className="nuel-connects-apps  m-b-40">No worries.</p>
                  <hr />
                  <div className="row">
                    <div className="col-12 m-b-34">
                      <a className="back-to-login" href="/auth/sign-in">
                        BACK TO LOGIN
                      </a>
                    </div>
                    <div className="col-12">
                      <form id="sign_in_form">
                        <div className="form-group m-0">
                          <input
                            className="form-control-lg forn-trans form-control"
                            id="email"
                            name="email"
                            placeholder="ENTER YOUR EMAIL"
                            required
                            type="email"
                          />
                        </div>
                        <p className="you-will-get-your-pa">
                          You will get your password reminder
                        </p>
                        <div className="t-center">
                          <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                          >
                            GET RESET GUIDE
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 right-bg dis-flex dis-flex-column dis-flex-bottom dis-flex-right">
                <div className="p-l-60 p-r-60">
                  <h3 className="h21">2X</h3>
                  <p className="is-the-awerage-email m-b-100">
                    is the average email open rate according to Mailchimp
                    Research. Nuel helps you show your message to everyone else.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Forgot;
