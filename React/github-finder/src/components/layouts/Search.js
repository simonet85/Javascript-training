import React, { useState, useContext } from 'react';
import GithubContext from './../../context/github/githubContext';
import AlertContext from './../../context/alert/alertContext';

const Search = () => {
  //using useContext hook in function
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // using useState hook in function
  const [text, setText] = useState('');

  /**
   * passing data to the parent component by using props
   * prevent default form submission behavior
   * @param {*} e
   */
  const onSubmit = (e) => {
    if (text === '') {
      alertContext.setAlert('Please enter something', 'ligth');
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

export default Search;
