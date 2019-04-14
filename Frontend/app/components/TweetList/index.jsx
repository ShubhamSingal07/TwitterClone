import React from 'react';
import { connect } from 'react-redux';

import TweetItem from './TweetItem';
import * as Actions from '../../actions';
import { DotsLoader } from '../../components';
import './style.scss';

class TweetList extends React.PureComponent {
  state = {
    newTweet: '',
  };

  handleValueChange = e => {
    this.setState({
      newTweet: e.target.value,
    });
  };

  render() {
    const { newTweet } = this.state;
    const { addTweet, tweets, inProgress, errors } = this.props;

    const handleAddTweet = () => {
      addTweet(newTweet);
      this.setState({
        newTweet: '',
      });
    };

    const handleOnKeyUp = e => {
      if (e.keyCode == 13) {
        handleAddTweet();
      }
    };

    return (
      <div className="mx-1 mt-2 tweetList">
        <div id="input_tweet">
          <div className="input-group mb-3 p-2">
            <input
              type="text"
              className="form-control"
              placeholder="What's happening?"
              name="newTweet"
              value={newTweet}
              onChange={this.handleValueChange}
              onKeyUp={handleOnKeyUp}
            />
            <div className="input-group-append">
              <button className="btn btn-primary rounded-right" onClick={handleAddTweet}>
                Tweet
              </button>
            </div>
          </div>
        </div>
        {inProgress ? <DotsLoader /> : null}
        {errors && <p className="alert alert-danger">{errors}</p>}
        {tweets.length == 0 ? (
          <div className="m-3">
            <h3 className="font-weight-bold">What? No Tweets yet?</h3>
            <p>
              This empty timeline won’t be around for long. Start following people and you’ll see Tweets show up here.
            </p>
          </div>
        ) : (
          tweets.map(tweet => <TweetItem tweetItem={tweet} key={tweet.tweetid} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => ({
  tweets: tweets.data,
  inProgress: tweets.inProgress,
  errors: tweets.errors,
});

const mapDispatchToProps = dispatch => ({
  addTweet: tweet => dispatch(Actions.addTweet(tweet)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetList);
