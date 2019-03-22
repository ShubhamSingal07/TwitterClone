import Actions from '../store/actions';

const loginInProgress = () => ({
  type: Actions.loginInProgress,
});

const loginSuccess = payload => ({
  type: Actions.loginSuccess,
  payload,
});

const loginFail = payload => ({
  type: Actions.loginFail,
  payload,
});

export const login = ({ username, password }) => async dispatch => {
  await dispatch(loginInProgress());

  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      body: {
        username: username,
        password: password,
      },
    });

    if (res.homepage) {
      dispatch(loginSuccess(res.user));
      return user;
    } else throw new Error('Invalid username or password');
  } catch (err) {
    dispatch(loginFail(errors));
    return err;
  }
};
