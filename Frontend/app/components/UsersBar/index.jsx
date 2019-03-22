import React from 'react';
import { connect } from 'react-redux';

import UsersItem from './UsersItem';

class UsersBar extends React.Fragment {
  state = {
    username: '',
    usersArr: [],
  };

  getDerivedStateFromProps() {
    const { users } = this.props;
    this.setState({
      usersArr: users,
    });
  }

  handleValueChange = e => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    const { username, usersArr } = this.state;
    const { users } = this.props;

    const handleSearch = e => {
      searchedUser = users.filter(({ username }) => username == e.target.value);
      this.setState({
        usersArr: searchedUser,
      });
    };

    return (
      <React.Fragment>
        <div>
          <input
            type="text"
            placeholder="Search User"
            name="username"
            value={username}
            onChange={this.handleValueChange}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div>
          {usersArr.map(({ username, id }) => (
            <UsersItem username={username} id={id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(UsersBar);
