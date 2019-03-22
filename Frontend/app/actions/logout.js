import Actions from '../store/actions';
import actions from '../store/actions';

const logoutSuccess = () => ({
  type: Actions.logoutSuccess,
});

const logoutInProgress = () => ({
  type: Actions.logoutInProgress,
});

const logoutFail = payload => ({
  type: actions.logoutFail,
  payload,
});

export const logout = () => async dispatch => {
  await dispatch(logoutInProgress());
  try {
    const res = await fetch('http://localhost:5000/api/logout');
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(
      logoutFail({
        error: err,
      }),
    );
  }
};
