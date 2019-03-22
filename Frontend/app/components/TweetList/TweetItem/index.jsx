import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../../actions';

class TweetItem extends React.PureComponent {
  state = {
    isLiked: false,
  };

  getDerivedStateFromProps() {
    const { user, tweetItem } = this.props;
    this.setState({
      isLiked: tweetItem.likedby.includes(user.id),
    });
  }

  render() {
    const { tweetItem, like, dislike } = this.props;
    const { isLiked } = this.state;

    const handleLike = () => {
      if (isLiked) {
        dislike(tweetItem.tweetByUserId, tweetItem.tweetid);
      } else {
        like(tweetItem.tweetByUserId, tweetItem.tweetid);
      }
      this.setState({
        isLiked: !isLiked,
      });
    };

    return (
      <div>
        <div>{tweetItem.tweetByUserName}</div>
        <div>{tweetItem.tweet}</div>
        <div>
          <button onClick={handleLike}>{isLiked ? '❤️' : '♡'}</button>
          <span>{tweetItem.likes}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  like: payload => dispatch(Actions.like(payload)),
  dislike: payload => dispatch(Actions.dislike(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetItem);
