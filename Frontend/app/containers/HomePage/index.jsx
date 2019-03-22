import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions';
import { NavBar, ProfileBar, TweetList, UsersBar } from '../../components';

class HomePage extends React.PureComponent {
  async componentDidMount() {
    const { fetchHomePage } = this.props;
    await fetchHomePage();
  }

  render() {
    //complete logout in actions and handle request in backend
    return (
      <React.Fragment>
        <NavBar />
        <ProfileBar />
        <TweetList />
        <UsersBar />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchHomePage: () => dispatch(Actions.fetchHomePage()),
});

export default connect(mapDispatchToProps)(HomePage);
