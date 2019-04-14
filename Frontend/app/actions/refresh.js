import Actions from '../store/actions';

const refreshSuccess = payload => ({
  type: Actions.refreshSuccess,
  payload,
});

const refreshInProgress = () => ({
  type: Actions.refreshInProgress,
});

const refreshFail = payload => ({
  type: Actions.refreshFail,
  payload,
});

export const refresh = () => async dispatch => {
  await dispatch(refreshInProgress());
  try {
    const res = await fetch('http://localhost:5000/api/home', {
      headers: {
        Authorization: `Token ${localStorage.jwt}`,
      },
    });
    const data = await res.json();
    if (data.success) {
      dispatch(refreshSuccess(data.user));
      return data.user;
    } else {
      dispatch(
        refreshFail({
          errors: data.error,
        }),
      );
    }
  } catch (err) {
    dispatch(
      refreshFail({
        errors: 'Could not connect to server',
      }),
    );
  }
};
