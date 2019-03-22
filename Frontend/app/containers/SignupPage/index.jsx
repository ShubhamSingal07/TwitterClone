import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginSignup } from '../../components';

class SignupPage extends React.PureComponent {
  render() {
    const { signedUp } = this.props;

    if (signedUp) {
      <Redirect to="/login" />;
    }

    return (
      <React.Fragment>
        <h1>SigninPage</h1>
        <LoginSignup isLoginPage={false} />
        <Link to="/login">Already have an Account?</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  signedUp: auth.signedUp,
});

export default connect(mapStateToProps)(SignupPage);
