import Actions from '../store/actions';
import { logout, url } from './';

const dislikeSuccess = payload => ({
  type: Actions.dislikeSuccess,
  payload,
});

const dislikeInProgress = () => ({
  type: Actions.dislikeInProgress,
});

const dislikeFail = () => ({
  type: Actions.dislikeFail,
});

export const dislike = ({ tweetItem, userid }) => async dispatch => {
  const { tweetByUserId, tweetid } = tweetItem;
  await dispatch(dislikeInProgress());
  try {
    const res = await fetch(`${url}/api/dislike`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${window.localStorage.jwt}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `tweetByUserId=${tweetByUserId}&tweetid=${tweetid}`,
    });
    const data = await res.json();
    if (data.success) dispatch(dislikeSuccess({ tweetid, userid }));
    else if (data.userNotPresent) dispatch(logout());
  } catch (err) {
    dispatch(
      dislikeFail({
        errors: err,
      }),
    );
  }
};
