import Actions from '../actions';

const tweetsReducer = (
  state = {
    loader: false,
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
        loader: false,
        data: payload.tweets,
        errors: undefined,
      };
    case Actions.homepageFail:
      return {
        ...state,
        loader: false,
        errors: payload.errors,
      };
    case Actions.homepageInProgress:
      return {
        ...state,
        loader: true,
        errors: undefined,
      };
    case Actions.refreshInProgress:
      return {
        ...state,
        loader: true,
      };
    case Actions.refreshSuccess:
      return {
        ...state,
        loader: false,
      };
    case Actions.refreshFail:
      return {
        ...state,
        loader: false,
      };
    case Actions.logout:
      return {
        ...state,
        errors: undefined,
        data: [],
        loader: false,
        inProgress: false,
      };
    case Actions.followSuccess:
      return {
        ...state,
        errors: undefined,
        data: [...payload.tweets, ...state.data],
      };
    case Actions.unfollowSuccess:
      return {
        ...state,
        data: state.data.filter(tweet => tweet.tweetByUserId != payload.userid),
        errors: undefined,
      };
    case Actions.likeSuccess: {
      let newData = state.data;
      newData = newData.map(tweet => {
        if (tweet.tweetid == payload.tweetid) {
          return {
            ...tweet,
            likes: tweet.likes + 1,
            likedby: [payload.userid, ...tweet.likedby],
          };
        } else {
          return tweet;
        }
      });

      return {
        ...state,
        data: newData,
        errors: undefined,
      };
    }
    case Actions.dislikeSuccess: {
      let newData = state.data;
      newData = newData.map(tweet => {
        if (tweet.tweetid == payload.tweetid) {
          let newLikedby = tweet.likedby.filter(val => val != payload.userid);
          return {
            ...tweet,
            likes: tweet.likes - 1,
            likedby: newLikedby,
          };
        } else {
          return tweet;
        }
      });

      return {
        ...state,
        data: newData,
        errors: undefined,
      };
    }
    case Actions.addTweetFail:
      return {
        ...state,
        inProgress: false,
        errors: payload.errors,
      };
    case Actions.addTweetSuccess:
      return {
        ...state,
        data: [payload, ...state.data],
        errors: undefined,
        inProgress: false,
      };
    case Actions.addTweetInProgress:
      return {
        ...state,
        errors: undefined,
        inProgress: true,
      };
    default:
      return state;
  }
};

export default tweetsReducer;
