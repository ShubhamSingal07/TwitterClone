import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginSignup } from '../../components';
import './style.scss';

class LoginPage extends React.PureComponent {
  render() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container mt-4" style={{ padding: 0 }} id="login_page">
        <div className="container p-4" id="input_grp">
          <h3 className="mb-3 mt-3 font-weight-bold">Log in to Twitter</h3>
          <LoginSignup isLoginPage={true} />
        </div>
        <div className="p-3" id="link">
          New to Twitter?
          <Link to="/signup"> Sign up now</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps)(LoginPage);
