import React from 'react';
import { connect } from 'react-redux';

const ProfileBar = React.memo(({ user }) => (
  <div className="profileBar">
    <h1>{user.username}</h1>
    <h3>@{user.username}</h3>
  </div>
));

const mapStateToProps = user => ({
  user,
});

export default connect(mapStateToProps)(ProfileBar);
