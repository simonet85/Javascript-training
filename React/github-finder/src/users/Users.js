import React from 'react';
import UserItems from './UserItems';
import PropTypes from 'prop-types';
import Spinner from './../components/layouts/Spinner';

const Users = ({ users, loading }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
