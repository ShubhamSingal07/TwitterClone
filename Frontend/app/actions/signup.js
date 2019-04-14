import Actions from '../store/actions';

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
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        console.log('signup success');
        dispatch(SignupSuccess(data.user));
        console.log('after dispatch signup success');
      } else {
        return dispatch(
          SignupFail({
            error: 'Could not connect to Server . Please try again later',
          }),
        );
      }
    } else {
      console.log('passwords does not match');
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
