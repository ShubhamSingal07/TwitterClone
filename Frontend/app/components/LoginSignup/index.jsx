import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import * as Actions from '../../actions';

class LoginSignup extends React.PureComponent {
  state = {
    username: '',
    password: '',
    passwordAgain: '',
  };

  handleValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password, passwordAgain } = this.state;
    const { isLoginPage, login, signup, errors, loggingIn, signingUp } = this.props;

    const handleLogin = () => login({ username, password });
    const handleSignup = () => signup({ username, password, passwordAgain });

    return (
      <div>
        <input type="text" name="username" value={username} placeholder="Username" onChange={this.handleValueChange} />
        <input type="password" name="password" value={password} placeholder="Password" />
        {isLoginPage ? null : (
          <input type="password" name="passwordAgain" value={passwordAgain} placeholder="Password" />
        )}
        {errors && <p>{errors}</p>}
        <button onClick={isLoginPage ? handleLogin : handleSignup}>
          {isLoginPage ? { loggingIn } ? <Loader /> : 'Login' : { signingUp } ? <Loader /> : 'Signin'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggingIn: auth.loggingIn,
  signingUp: auth.signingUp,
  errors: auth.errors,
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(Actions.login(payload)),
  signup: payload => dispatch(Actions.signup(payload)),
});

export default connect(
  mapDispatchToProps,
  mapStateToProps,
)(LoginSignup);
