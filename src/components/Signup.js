import React, { Component } from "react";
import illustartion from "../images/signup-login-ill_2x.png";

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

                    <form
                      id="sign_up_form"
                      action="/auth/sign-up"
                      method="POST"
                    >
                      <div className="form-group">
                        <div className=" dis-flex  dis-flex-1">
                          <input
                            className=" dis-flex  dis-flex-1 form-control form-muted"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="email@email.com"
                            required
                            autoComplete="nope"
                          />
                        </div>
                      </div>
                      <hr className="m-b-30 m-t-30" />
                      <div className="form-group m-b-40">
                        <label className="form-control-label">
                          Please introduce yourself, sweety
                        </label>
                        <div className="row">
                          <div className="col-6 p-r-0">
                            <input
                              className="forn-trans form-control"
                              id="firstName"
                              type="text"
                              name="firstName"
                              placeholder="FIRST NAME"
                              required
                              autoComplete="nope"
                            />
                          </div>
                          <div className="col-6 p-l-0">
                            <input
                              className="forn-trans col-6 form-control"
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="LAST NAME"
                              required
                              autoComplete="nope"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="m-b-30 m-t-30" />
                      <div className="form-group m-b-40">
                        <label className="form-control-label">
                          Let’s keep hackers chillin’
                        </label>
                        <input
                          className="forn-trans form-control"
                          name="password"
                          id="password"
                          type="password"
                          placeholder="CREATE A PASSWORD"
                          required
                          autoComplete="nope"
                        />
                        <span className="please-keep-it-at-le">
                          please keep it at least 8 characters long
                        </span>
                      </div>
                      <div className="t-center">
                        <button
                          className="btn btn-lg btn-primary"
                          type="submit"
                        >
                          CONTINUE
                        </button>
                        <span className="your-privacy-is-valu m-t-10 t-center dis-block">
                          your privacy is valued
                        </span>
                      </div>
                    </form>
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
