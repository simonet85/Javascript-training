import React, { useContext } from 'react';
import UserItems from './UserItems';
import PropTypes from 'prop-types';
import Spinner from './../layouts/Spinner';
import GithubContext from './../../context/github/githubContext';
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  // Loading the spinner
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
