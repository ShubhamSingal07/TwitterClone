import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { HomePage, LoginPage, SignupPage } from './containers';
import { EntryController } from './controllers';
import { Footer } from './components';

import './styles/main.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route
              render={() => (
                <EntryController>
                  <Route path="/" exact component={HomePage} />
                </EntryController>
              )}
            />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
