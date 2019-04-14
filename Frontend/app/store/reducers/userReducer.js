import Actions from '../actions';

const userReducer = (
  state = {
    id: undefined,
    data: undefined,
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.loginSuccess:
      return {
        ...state,
        id: payload.id,
        data: payload.username,
      };
    case Actions.SignupSuccess:
      return {
        ...state,
        id: payload.id,
        data: payload.username,
      };
    case Actions.logout:
      return {
        ...state,
        id: undefined,
        data: undefined,
      };
    case Actions.loginFail:
      return {
        ...state,
        id: undefined,
        data: undefined,
      };
    case Actions.refreshSuccess:
      return {
        ...state,
        id: payload.id,
        data: payload.username,
      };
    default:
      return state;
  }
};

export default userReducer;
