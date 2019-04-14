import Actions from '../store/actions';

const homepageSuccess = payload => ({
  type: Actions.homepageSuccess,
  payload,
});

const homepageFail = () => ({
  type: Actions.homepageFail,
});

const homepageInProgress = () => ({
  type: Actions.homepageInProgress,
});

const loginFail = payload => ({
  type: Actions.loginFail,
  payload,
});

export const fetchHomePage = () => async dispatch => {
  try {
    await dispatch(homepageInProgress());
    const res = await fetch('http://localhost:5000/api/home', {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.jwt}`,
      },
    });
    const data = await res.json();
    if (data.success) {
      dispatch(
        homepageSuccess({
          users: data.users,
          tweets: data.tweets,
          following: data.following,
        }),
      );
    } else {
      dispatch(
        loginFail({
          error: 'Session timed out',
        }),
      );
    }
  } catch (err) {
    dispatch(homepageFail());
  }
};
