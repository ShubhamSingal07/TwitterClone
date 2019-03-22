import Actions from '../store/actions';

const SignupInProgress = () => ({
  type: Actions.SignupInProgress,
});

const SignupSuccess = () => ({
  type: Actions.SignupSuccess,
});

const SignupFail = payload => ({
  type: Actions.SignupFail,
  payload,
});

export const signup = ({ username, password }) => async dispatch => {
  await dispatch(SignupInProgress());
  try {
    if (password === passwordAgain) {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        body: {
          username: username,
          password: password,
        },
      });
      const newRes = await res.json();
      if (newRes.loginPage) {
        dispatch(SignupSuccess());
      } else {
        throw new Error('Could not connect to Server . Please try again later');
      }
    } else {
      return dispatch(SignupFail('Password does not match with each other'));
    }
  } catch (errors) {
    return dispatch(SignupFail(errors));
  }
};
