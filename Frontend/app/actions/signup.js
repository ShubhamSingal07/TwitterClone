import Actions from '../store/actions';
import { url } from './';

const SignupInProgress = () => ({
  type: Actions.SignupInProgress,
});

const SignupSuccess = payload => ({
  type: Actions.SignupSuccess,
  payload,
});

const SignupFail = payload => ({
  type: Actions.SignupFail,
  payload,
});

export const signup = ({ username, password, passwordAgain }) => async dispatch => {
  await dispatch(SignupInProgress());
  if (username.trim() == '' || password.trim() == '' || passwordAgain.trim() == '') {
    return dispatch(
      SignupFail({
        errors: 'Fields cannot be empty',
      }),
    );
  }
  try {
    if (password == passwordAgain) {
      const res = await fetch(`${url}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
      });
      const data = await res.json();
      if (data.success) {
        dispatch(SignupSuccess(data.user));
      } else if (data.exist) {
        dispatch(
          SignupFail({
            errors: data.errors,
          }),
        );
      } else {
        return dispatch(
          SignupFail({
            errors: 'Could not connect to Server . Please try again later',
          }),
        );
      }
    } else {
      return dispatch(
        SignupFail({
          errors: 'Passwords does not match',
        }),
      );
    }
  } catch (err) {
    console.log(err);
    return dispatch(
      SignupFail({
        errors: 'Could not connect to database',
      }),
    );
  }
};
