import React from 'react';
import { connect } from 'react-redux';

import UsersItem from './UsersItem';
import { DotsLoader } from '../../components';
import './style.scss';

class UsersBar extends React.PureComponent {
  render() {
    const { users, userid, inProgress } = this.props;

    return (
      <div className="usersBar m-1 mt-2 d-flex justify-content-center">
        <div>
          <h4 className="m-2 font-weight-bold">Who to follow?</h4>

          {inProgress ? <DotsLoader /> : null}

          <div className="p-2">
            <div className="m-auto">
              {users.length == 1 ? (
                <div className="m-3">
                  <h3 className="font-weight-bold">No Users to follow?</h3>
                  <p>Invite your friends to join Twitter.</p>
                </div>
              ) : (
                users.map(({ username, id }) => {
                  if (userid != id) {
                    return <UsersItem username={username} key={id} id={id} />;
                  } else {
                    return null;
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, user, following }) => ({
  userid: user.id,
  users: users.data,
  inProgress: following.inProgress,
});

export default connect(mapStateToProps)(UsersBar);
