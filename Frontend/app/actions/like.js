import Actions from '../store/actions';

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

export const like = ({ tweetByUserId, tweetid }) => async dispatch => {
  await dispatch(likeInProgress());
  try {
    const res = await fetch('http://localhost:5000/api/like', {
      body: {
        tweetByUserId: tweetByUserId,
        tweetid: tweetid,
      },
    });

    dispatch(likeSuccess(res.tweets));
  } catch (err) {
    dispatch(
      likeFail({
        errors: err,
      }),
    );
  }
};
