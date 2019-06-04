import Actions from '../store/actions';
import { logout, url } from './';

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
    const res = await fetch(`${url}/api/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.jwt}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `followingId=${id}`,
    });

    const data = await res.json();
    if (data.success)
      dispatch(
        followSuccess({
          tweets: data.tweets,
          userid: id,
        }),
      );
    else if (data.userNotPresent) dispatch(logout());
  } catch (err) {
    dispatch(
      followFail({
        errors: err,
      }),
    );
  }
};
