import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginSignup } from '../../components';
import './style.scss';

class SignupPage extends React.PureComponent {
  render() {
    const { loggedIn } = this.props;

    if (loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container mt-4" style={{ padding: 0 }} id="signup_page">
        <div className="container p-4" id="input_grp">
          <h3 className="mt-3 mb-3 font-weight-bold">Create your Account</h3>
          <LoginSignup isLoginPage={false} />
        </div>
        <div className="p-3" id="link">
          <span className="container w-50">
            <Link to="/login">Already have an Account?</Link>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps)(SignupPage);
