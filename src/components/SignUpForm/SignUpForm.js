import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignUpFormLayout from "./SignUpFormLayout";

import { userActions } from "../../_actions";

const { register } = userActions;

class SignUpForm extends PureComponent {
  static propTypes = {
    register: PropTypes.func.isRequired
  };

  render() {
    return <SignUpFormLayout register={this.props.register} />;
  }
}

const mapStateToProps = ({ authentication }) => ({
  authentication: authentication
});

export default connect(
  mapStateToProps,
  { register }
)(SignUpForm);
