import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SignInFormLayout extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  state = {
    email: "",
    password: ""
  };
  submitForm = e => {
    this.props.login(this.state);
    e.preventDefault();
  };
  render() {
    return (
      <form id="sign_up_form" onSubmit={this.submitForm}>
        <div className="form-group m-b-20">
          <input
            className="form-control-lg forn-trans form-control"
            type="email"
            id="email"
            name="email"
            placeholder="ENTER YOUR EMAIL"
            required
            val={this.state.email}
            onChange={e =>
              this.setState({
                ...this.state,
                email: e.target.value
              })
            }
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
            val={this.state.password}
            onChange={e =>
              this.setState({
                ...this.state,
                password: e.target.value
              })
            }
          />
        </div>
        <div className="m-b-40">
          <a href="/auth/reset">Forgot password?</a>
        </div>
        <div className="t-center">
          <button className="btn btn-lg btn-primary" type="submit">
            LOGIN
          </button>
          <span className="your-privacy-is-valu m-t-10 t-center dis-block">
            Don’t have account yet? <a href="/auth/sign-up">Sign up</a>
          </span>
        </div>
      </form>
    );
  }
}
