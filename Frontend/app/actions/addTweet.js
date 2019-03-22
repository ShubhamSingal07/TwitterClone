import Actions from '../store/actions';

const addTweetSuccess = payload => ({
  type: Actions.addTweetSuccess,
  payload,
});

const addTweetInProgress = () => ({
  type: Actions.addTweetInProgress,
});

const addTweetFail = payload => ({
  type: Actions.addTweetFail,
  payload,
});

export const addTweet = tweet => async dispatch => {
  await dispatch(addTweetInProgress());

  try {
    const res = await fetch('http://localhost:5000/api/tweets', {
      method: 'POST',
      body: {
        tweet: tweet,
      },
    });

    dispatch(addTweetSuccess(res.tweets));
  } catch (err) {
    dispatch(
      addTweetFail({
        error: err,
      }),
    );
  }
};
