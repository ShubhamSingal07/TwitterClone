import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.scss';
import * as Actions from '../../actions';
import TwitterLogo from '../../../public/images/TwitterLogo.png';
import HomeLogo from '../../../public/images/HomeLogo.png';

const NavBar = React.memo(({ logout }) => (
  <div className="navBar sticky-top d-flex justify-content-around align-items-center">
    <Link to="/">
      <img src={HomeLogo} width="40px" height="40px" />
      <span>Home</span>
    </Link>
    <img id="tweet_img" src={TwitterLogo} width="24px" height="21px" />
    <button className="btn btn-outline-primary rounded-pill" onClick={logout}>
      Logout
    </button>
  </div>
));

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(NavBar);
