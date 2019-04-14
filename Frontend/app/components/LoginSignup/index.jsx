import React from 'react';
import { connect } from 'react-redux';

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
    const { isLoginPage, login, signup, errors, inProgress } = this.props;

    const handleLogin = () => login({ username, password });
    const handleSignup = () => signup({ username, password, passwordAgain });

    return (
      <div>
        <div className="input-group input-group-sm mb-3">
          <input
            className="form-control"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={this.handleValueChange}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleValueChange}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          {isLoginPage ? null : (
            <input
              className="form-control"
              type="password"
              name="passwordAgain"
              value={passwordAgain}
              placeholder="Enter Password Again"
              onChange={this.handleValueChange}
            />
          )}
        </div>
        {errors && <p className="alert alert-danger">{errors}</p>}
        <button className="btn btn-primary rounded-pill mb-3" onClick={isLoginPage ? handleLogin : handleSignup}>
          {isLoginPage ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  inProgress: auth.inProgress,
  errors: auth.errors,
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(Actions.login(payload)),
  signup: payload => dispatch(Actions.signup(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginSignup);
