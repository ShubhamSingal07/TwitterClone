import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions';
import { NavBar, ProfileBar, TweetList, UsersBar, BirdLoader } from '../../components';

class HomePage extends React.PureComponent {
  async componentDidMount() {
    const { fetchHomePage } = this.props;
    await fetchHomePage();
  }

  render() {
    const { loader } = this.props;
    if (loader) {
      return <BirdLoader />;
    }

    return (
      <div>
        <NavBar />
        <div className="container align-items-baseline">
          <div className="d-flex justify-content-around">
            <ProfileBar />
            <TweetList />
            <UsersBar />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => ({
  loader: tweets.loader,
});

const mapDispatchToProps = dispatch => ({
  fetchHomePage: () => dispatch(Actions.fetchHomePage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
