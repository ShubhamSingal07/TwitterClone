import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../actions';

class UsersItem extends React.PureComponent {
  state = {
    isFollowing: [],
  };

  getDerivedStateFromProps() {
    const { following, id } = this.props;
    this.setState({
      isFollowing: following.includes(id),
    });
  }

  render() {
    const { isFollowing } = this.state;
    const { username, follow, unfollow, id } = this.props;

    const handleFollowing = () => {
      if (isFollowing) {
        unfollow(id);
      } else {
        follow(id);
      }
      this.setState({
        isFollowing: !isFollowing,
      });
    };

    return (
      <div>
        <div>{username}</div>
        <button onClick={handleFollowing}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
      </div>
    );
  }
}

const mapStateToProps = ({ following }) => ({
  following,
});

const mapDispatchToProps = dispatch => ({
  follow: id => dispatch(Actions.follow(id)),
  unfollow: id => dispatch(Actions.unfollow(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersItem);
