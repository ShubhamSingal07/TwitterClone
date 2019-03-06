// initialize react here
import React from 'react';
import { render } from 'react-dom';
import { } from 'reactstrap';

import './styles/main.scss';

class App extends React.Component {

  render() {

    return(
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
      </div>
    )
    
  }
}

render(<App />, document.getElementById('app'));
