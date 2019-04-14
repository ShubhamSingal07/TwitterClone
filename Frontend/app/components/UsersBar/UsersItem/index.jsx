import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../../actions';
import './style.scss';

class UsersItem extends React.PureComponent {
  state = {
    isFollowing: [],
  };

  static getDerivedStateFromProps(props, state) {
    const { following, id } = props;
    return {
      ...state,
      isFollowing: following.includes(id),
    };
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
      <div className="usersItem p-1">
        <div>{username}</div>
        <button className="btn btn-outline-primary rounded-pill btn-sm" onClick={handleFollowing}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ following }) => ({
  following: following.data,
});

const mapDispatchToProps = dispatch => ({
  follow: id => dispatch(Actions.follow(id)),
  unfollow: id => dispatch(Actions.unfollow(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersItem);
