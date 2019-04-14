import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import tweetsReducer from './tweetsReducer';
import followingReducer from './followingReducer';

const Reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  tweets: tweetsReducer,
  following: followingReducer,
});

export default Reducer;
