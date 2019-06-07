import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './reducers';
import Actions from './actions';

const localStorageMiddleware = store => next => action => {
  if (action.type == Actions.SignupSuccess || action.type == Actions.loginSuccess) {
    localStorage.jwt = action.payload.token;
  } else if (action.type == Actions.logout) {
    delete localStorage.jwt;
  }
  next(action);
};

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(localStorageMiddleware),
  ),
);

export default store;
