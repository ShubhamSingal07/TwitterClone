import Actions from '../store/actions';
import { logout, url } from './';

const likeSuccess = payload => ({
  type: Actions.likeSuccess,
  payload,
});

const likeInProgress = () => ({
  type: Actions.likeInProgress,
});

const likeFail = () => ({
  type: Actions.likeFail,
});

export const like = ({ tweetItem, userid }) => async dispatch => {
  const { tweetByUserId, tweetid } = tweetItem;
  await dispatch(likeInProgress());
  try {
    const res = await fetch(`${url}/api/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Token ${localStorage.jwt}`,
      },
      body: `tweetByUserId=${tweetByUserId}&tweetid=${tweetid}`,
    });
    const data = await res.json();
    if (data.success) dispatch(likeSuccess({ tweetid, userid }));
    else if (data.userNotPresent) dispatch(logout());
  } catch (err) {
    dispatch(
      likeFail({
        errors: err,
      }),
    );
  }
};
