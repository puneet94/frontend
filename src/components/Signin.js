import React, { Component } from "react";
import Logo from "../images/logo-3.png";
import illustartion from "../images/signup-login-ill_2x.png";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../actions/auth";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSigninDetails: {
        email: "testtest@test.com",
        password: "testtes"
      }
    };
  }
  signin = async e => {
    e.preventDefault();
    this.props.signin(this.state.userSigninDetails);
  };
  changeUserSigninDetails = e => {
    const { name, value } = e.target;
    this.setState(previousState => {
      return {
        userSigninDetails: {
          ...previousState.userSigninDetails,
          [name]: value
        }
      };
    });
  };
  render() {
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/auth/connect" />;
    }
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
                        <form id="sign_in_form" onSubmit={this.signin}>
                          <div className="form-group m-b-20">
                            <input
                              className="form-control-lg forn-trans form-control"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="ENTER YOUR EMAIL"
                              required
                              value={this.state.userSigninDetails.email}
                              onChange={this.changeUserSigninDetails}
                            />
                          </div>
                          <div className="form-group ">
                            <input
                              className="form-control-lg forn-trans form-control"
                              type="password"
                              id="password"
                              name="password"
                              placeholder="ENTER YOUR PASSWORD"
                              required
                              value={this.state.userSigninDetails.password}
                              onChange={this.changeUserSigninDetails}
                            />
                          </div>
                          <div className="m-b-40">
                            <a href="/auth/reset">Forgot password?</a>
                          </div>
                          <div className="t-center">
                            <button
                              className="btn btn-lg btn-primary"
                              type="submit"
                            >
                              LOGIN
                            </button>
                            <span className="your-privacy-is-valu m-t-10 t-center dis-block">
                              Don’t have account yet?{" "}
                              <a href="/auth/sign-up">Sign up</a>
                            </span>
                          </div>
                        </form>
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
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  { signin }
)(Signin);
