import Actions from '../store/actions';
import { logout } from './';

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
  if (tweet.trim() == '') {
    return dispatch(
      addTweetFail({
        errors: 'Tweet cannot be empty',
      }),
    );
  }
  try {
    const res = await fetch('http://localhost:5000/api/tweets', {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.jwt}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `tweet=${tweet}`,
    });

    const data = await res.json();
    if (data.success) dispatch(addTweetSuccess(data.tweet));
    else if (data.userNotPresent) dispatch(logout());
  } catch (err) {
    dispatch(
      addTweetFail({
        errors: err,
      }),
    );
  }
};
