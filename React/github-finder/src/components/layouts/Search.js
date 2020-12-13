import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Search = ({ clearUsers, showClear, searchUsers, setAlert }) => {
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
      searchUsers(text);
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
      {showClear && (
        <button className='btn btn-ligth btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
