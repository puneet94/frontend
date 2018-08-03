import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SignUpFormLayout extends PureComponent {
  static propTypes = {
    register: PropTypes.func.isRequired
  };

  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  };
  submitForm = e => {
    this.props.register(this.state);
    e.preventDefault();
  };
  render() {
    return (
      <form id="sign_up_form" onSubmit={this.submitForm}>
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
              val={this.state.email}
              onChange={e =>
                this.setState({
                  ...this.state,
                  email: e.target.value
                })
              }
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
                val={this.state.firstName}
                onChange={e =>
                  this.setState({
                    ...this.state,
                    firstName: e.target.value
                  })
                }
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
                val={this.state.lastName}
                onChange={e =>
                  this.setState({
                    ...this.state,
                    lastName: e.target.value
                  })
                }
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
            val={this.state.password}
            onChange={e =>
              this.setState({
                ...this.state,
                password: e.target.value
              })
            }
          />
          <span className="please-keep-it-at-le">
            please keep it at least 8 characters long
          </span>
        </div>
        <div className="t-center">
          <button className="btn btn-lg btn-primary" type="submit">
            CONTINUE
          </button>
          <span className="your-privacy-is-valu m-t-10 t-center dis-block">
            your privacy is valued
          </span>
        </div>
      </form>
    );
  }
}
