import Actions from '../store/actions';

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

export const dislike = ({ tweetByUserId, tweetid }) => async dispatch => {
  await dispatch(dislikeInProgress());
  try {
    const res = await fetch('http://localhost:5000/api/dislike', {
      body: {
        tweetByUserId: tweetByUserId,
        tweetid: tweetid,
      },
    });

    dispatch(dislikeSuccess(res.tweets));
  } catch (err) {
    dispatch(
      dislikeFail({
        errors: err,
      }),
    );
  }
};
