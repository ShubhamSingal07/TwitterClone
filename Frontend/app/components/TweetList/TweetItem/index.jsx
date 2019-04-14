import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../../actions';
import './style.scss';

class TweetItem extends React.PureComponent {
  state = {
    isLiked: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { user, tweetItem } = props;
    return {
      ...state,
      isLiked: tweetItem.likedby.includes(user.id),
    };
  }

  render() {
    const { tweetItem, like, dislike, user } = this.props;
    const { isLiked } = this.state;

    const handleLike = () => {
      if (isLiked) {
        dislike({
          tweetItem,
          userid: user.id,
        });
      } else {
        like({
          tweetItem,
          userid: user.id,
        });
      }
      this.setState({
        isLiked: !isLiked,
      });
    };

    return (
      <div className="tweetItem">
        <div className="p-3">
          <div>
            <b>{tweetItem.tweetByUserName}</b>
            <div>{tweetItem.tweet}</div>
          </div>
          <div>
            <button className="btn" onClick={handleLike}>
              {isLiked ? '❤️' : '🖤'}
            </button>
            <span>{tweetItem.likes}</span>
          </div>
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
