import React, { Component } from "react";
import illustartion from "../images/signup-login-ill_2x.png";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { Redirect, Link } from "react-router-dom";
import Logo from "../images/logo-3.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignupDetails: {
        email: "", //"shfkhdf" + Math.random() + "@someth.com",
        password: "",
        firstName: "fdff",
        lastName: "dffff"
      }
    };
  }
  componentWillMount = async () => {};
  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.userSignupDetails);
  };
  changeUserSignupDetails = e => {
    console.clear();

    const { name, value } = e.target;
    this.setState(previousState => {
      return {
        userSignupDetails: {
          ...previousState.userSignupDetails,
          [name]: value
        }
      };
    });
  };
  render = () => {
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
                      <Link to="/">
                        <img src={Logo} alt="react" width={90} />
                      </Link>
                    </div>
                    <Link className="f-14" to="/auth/sign-in">
                      LOGIN
                    </Link>
                  </header>
                  <div className="container mw-560">
                    <h2 className="great-things-await">Great things await</h2>
                    <p className="nuel-connects-apps">
                      Nuel connects apps to help you reach out to the right
                      audience.
                    </p>
                    <hr />

                    <form id="sign_up_form" onSubmit={this.signup}>
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
                            value={this.state.userSignupDetails.email}
                            onChange={this.changeUserSignupDetails}
                          />
                        </div>
                        {this.props.signupErrors.email &&
                          this.props.signupErrors.email.map(error => {
                            return (
                              <div className="alert alert-danger" key={error}>
                                {error}
                              </div>
                            );
                          })}
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
                              value={this.state.userSignupDetails.firstName}
                              onChange={this.changeUserSignupDetails}
                            />
                            {this.props.signupErrors.firstName &&
                              this.props.signupErrors.firstName.map(error => {
                                return (
                                  <span
                                    className="please-keep-it-at-le alert alert-danger"
                                    key={error}
                                  >
                                    {error}
                                  </span>
                                );
                              })}
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
                              value={this.state.userSignupDetails.lastName}
                              onChange={this.changeUserSignupDetails}
                            />
                            {this.props.signupErrors.lastName &&
                              this.props.signupErrors.lastName.map(error => {
                                return (
                                  <span
                                    className="please-keep-it-at-le alert alert-danger"
                                    key={error}
                                  >
                                    {error}
                                  </span>
                                );
                              })}
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
                          value={this.state.userSignupDetails.password}
                          onChange={this.changeUserSignupDetails}
                        />
                        {this.props.signupErrors.password &&
                          this.props.signupErrors.password.map(error => {
                            return (
                              <div className=" alert alert-danger" key={error}>
                                {error}
                              </div>
                            );
                          })}
                      </div>
                      <div className="t-center">
                        <button
                          className="btn btn-lg btn-primary"
                          type="submit"
                          disabled={
                            this.props.signUpLoading ||
                            !(
                              this.state.userSignupDetails.email &&
                              this.state.userSignupDetails.password.length >= 6
                            )
                          }
                        >
                          {this.props.signUpLoading ? "Loading.." : "CONTINUE"}
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
  };
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    signupErrors: state.error.signupErrors,
    signUpLoading: state.auth.signUpLoading
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(Signup);
