import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { HomePage, LoginPage, SignupPage } from './containers';

import './styles/main.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/login" exact Component={LoginPage} />
          <Route path="/signup" exact Component={SignupPage} />
          <Route path="/" exact Component={HomePage} />
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
