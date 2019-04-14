import Actions from '../actions';

const followingReducer = (
  state = {
    inProgress: false,
    data: [],
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.homepageSuccess:
      return {
        ...state,
        inProgress: false,
        data: payload.following,
      };
    case Actions.refreshSuccess:
      return {
        ...state,
        inProgress: false,
        data: [],
      };
    case Actions.logout:
      return {
        ...state,
        inProgress: false,
        data: [],
      };
    case Actions.followSuccess:
      return {
        ...state,
        inProgress: false,
        data: [...state.data, payload.userid],
      };
    case Actions.followInProgress:
      return {
        ...state,
        inProgress: true,
      };
    case Actions.followFail:
      return {
        ...state,
        inProgress: false,
      };
    case Actions.unfollowSuccess:
      return {
        ...state,
        inProgress: false,
        data: state.data.filter(value => value != payload.userid),
      };
    case Actions.unfollowInProgress:
      return {
        ...state,
        inProgress: true,
      };
    case Actions.unfollowFail:
      return {
        ...state,
        inProgress: false,
      };
    default:
      return state;
  }
};

export default followingReducer;
