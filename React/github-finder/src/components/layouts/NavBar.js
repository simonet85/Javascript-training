import React from 'react';
import PropTypes from 'prop-types';
const NavBar = (props) => {
  const {icon, title} = props
  return (
    <nav className='bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
    </nav>
  );
};

NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};
NavBar.propsTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
