import Actions from '../store/actions';
import { logout } from './';

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
        unfollowSuccess({
          userid: id,
        }),
      );
    else if (data.userNotPresent) dispatch(logout());
  } catch (err) {
    dispatch(
      unfollowFail({
        errors: err,
      }),
    );
  }
};
