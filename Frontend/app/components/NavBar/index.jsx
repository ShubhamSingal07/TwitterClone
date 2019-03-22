import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../../actions';

const NavBar = React.memo(() => (
  <React.Fragment>
    <Link to="/">
      <img src="https://cdn1.iconfinder.com/data/icons/twitter-ui-colored/48/JD-26-128.png" />
      <span>Home</span>
    </Link>
    <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Twitter-256.png" />
    <button onClick={logout}>Logout</button>
  </React.Fragment>
));

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout()),
});

export default connect(mapDispatchToProps)(NavBar);
