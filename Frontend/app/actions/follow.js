import Actions from '../store/actions';

const followInProgress = () => ({
  type: Actions.followInProgress,
});

const followFail = payload => ({
  type: Actions.followFail,
  payload,
});

const followSuccess = payload => ({
  type: Actions.followSuccess,
  payload,
});

export const follow = id => async dispatch => {
  await dispatch(followInProgress());
  try {
    const res = await fetch('http://localhost:5000/api/follow', {
      body: {
        followingId: id,
      },
    });
    dispatch(
      followSuccess({
        tweets: res.tweets,
      }),
    );
  } catch (err) {
    dispatch(
      followFail({
        errors: err,
      }),
    );
  }
};
