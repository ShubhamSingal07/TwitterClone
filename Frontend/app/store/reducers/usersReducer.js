import Actions from '../actions';

const usersReducer = (
  state = {
    inProgress: false,
    errors: undefined,
    data: [],
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.homepageSuccess:
      return {
        ...state,
        inProgress: false,
        data: payload.users,
        errors: undefined,
      };
    case Actions.homepageInProgress:
      return {
        ...state,
        inProgress: true,
        errors: undefined,
      };
    case Actions.homepageFail:
      return {
        ...state,
        inProgress: false,
        errors: payload.errors,
      };
    case Actions.logout:
      return {
        ...state,
        errors: undefined,
        data: [],
        inProgress: false,
      };
    case Actions.refreshSuccess:
      return {
        inProgress: false,
        errors: undefined,
        data: [],
      };
    default:
      return state;
  }
};

export default usersReducer;
