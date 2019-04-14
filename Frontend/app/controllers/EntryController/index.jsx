import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as Actions from '../../actions';

const EntryController = React.memo(({ loggedIn, children, refresh, history }) => {
  if (!loggedIn) {
    (async () => {
      let user = await refresh();
      if (!user) {
        return history.push('/login');
      } else {
        return children || null;
      }
    })();
  } else {
    return children || null;
  }
});

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  refresh: () => dispatch(Actions.refresh()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EntryController),
);
