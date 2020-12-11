import React, { Component } from 'react';
import UserItems from './UserItems';
class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: 2,
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        url: 'https://api.github.com/users/defunkt',
        html_url: 'https://github.com/defunkt',
      },
      {
        id: 3,
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        url: 'https://api.github.com/users/pjhyett',
        html_url: 'https://github.com/pjhyett',
      },
    ],
  };
  render() {
    return (
      <div style={usersStyle}>
        {this.state.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
