import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from './../../context/github/githubContext';

const Search = ({ setAlert }) => {
  //using useContext hook in function
  const githubContext = useContext(GithubContext);
  // using useState hook in function
  const [text, setText] = useState('');

  /**
   * passing data to the parent component by using props
   * prevent default form submission behavior
   * @param {*} e
   */
  const onSubmit = (e) => {
    if (text === '') {
      setAlert('Please enter something', 'ligth');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
    e.preventDefault();
  };
  //Getting data from input
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users ...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-ligth btn-block'
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
