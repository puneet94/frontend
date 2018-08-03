import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignInFormLayout from "./SignInFormLayout";

import { userActions } from "../../_actions";

const { login } = userActions;

class SignInForm extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  render() {
    return <SignInFormLayout login={this.props.login} />;
  }
}

const mapStateToProps = ({ authentication }) => ({
  authentication: authentication
});

export default connect(
  mapStateToProps,
  { login }
)(SignInForm);
