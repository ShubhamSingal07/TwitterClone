import Actions from '../actions';

const authReducer = (
  state = {
    inProgress: false,
    loggedIn: false,
    errors: undefined,
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.loginInProgress:
      return {
        ...state,
        inProgress: true,
        errors: undefined,
      };
    case Actions.loginSuccess:
      return {
        ...state,
        inProgress: false,
        loggedIn: true,
        errors: undefined,
      };
    case Actions.loginFail:
      return {
        ...state,
        inProgress: false,
        loggedIn: false,
        errors: payload.errors,
      };
    case Actions.SignupSuccess:
      return {
        ...state,
        inProgress: false,
        errors: undefined,
        loggedIn: true,
      };
    case Actions.SignupInProgress:
      return {
        ...state,
        inProgress: true,
        errors: undefined,
      };
    case Actions.SignupFail:
      return {
        ...state,
        inProgress: false,
        errors: payload.errors,
      };
    case Actions.logout:
      return {
        ...state,
        inProgress: false,
        loggedIn: false,
        errors: undefined,
      };
    case Actions.refreshInProgress:
      return {
        ...state,
        inProgress: false,
        errors: undefined,
      };
    case Actions.refreshSuccess:
      return {
        ...state,
        inProgress: false,
        loggedIn: true,
        errors: undefined,
      };
    case Actions.refreshFail:
      return {
        ...state,
        inProgress: false,
        loggedIn: false,
        errors: payload.errors,
      };
    default:
      return state;
  }
};

export default authReducer;
