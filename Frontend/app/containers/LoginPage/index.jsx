import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { LoginSignup } from '../../components';

class LoginPage extends React.PureComponent {
  render() {
    const { loggedIn } = this.props;

    if (loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <h1>LoginPage</h1>
        <LoginSignup isLoginPage={true} />
        <div>
          New to Twitter?
          <Link to="/signup">Sign up now</Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps)(LoginPage);
