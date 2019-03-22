import Actions from '../store/actions';

const unfollowInProgress = () => ({
  type: Actions.unfollowInProgress,
});

const unfollowFail = payload => ({
  type: Actions.unfollowFail,
  payload,
});

const unfollowSuccess = payload => ({
  type: Actions.unfollowSuccess,
  payload,
});

export const unfollow = id => async dispatch => {
  await dispatch(unfollowInProgress());
  try {
    const res = await fetch('http://localhost:5000/api/unfollow', {
      body: {
        followingId: id,
      },
    });
    dispatch(
      unfollowSuccess({
        followingId: id,
        tweets: res.tweets,
      }),
    );
  } catch (err) {
    dispatch(
      unfollowFail({
        errors: err,
      }),
    );
  }
};
