import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const ProfileBar = React.memo(({ username }) => (
  <div className="profileBar m-1 mt-2 p-3">
    <div>
      <h1>{username}</h1>
      <h5>@{username}</h5>
    </div>
  </div>
));

const mapStateToProps = ({ user }) => ({
  username: user.data,
});

export default connect(mapStateToProps)(ProfileBar);
