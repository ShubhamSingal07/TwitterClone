import React from 'react';
import { connect } from 'react-redux';

import TweetItem from './TweetItem';
import * as Actions from '../../actions';

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
    const { addTweet } = this.props;

    render(
      <div>
        <div>
          <input
            type="text"
            placeholder="What's happening?"
            name="newTweet"
            value={newTweet}
            onChange={this.handleValueChange}
          />
          <button onClick={addTweet}>Add</button>
        </div>
        {tweets.map(({ tweet }) => (
          <TweetItem tweetItem={tweet} />
        ))}
      </div>,
    );
  }
}

const mapStateToProps = ({ tweets }) => ({
  tweets,
});

const mapDispatchToProps = dispatch => ({
  addTweet: tweet => dispatch(Actions.addTweet(tweet)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetList);
