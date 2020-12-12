import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItems = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
        alt={login}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};
UserItems.propTypes = { user: PropTypes.object.isRequired };
export default UserItems;
