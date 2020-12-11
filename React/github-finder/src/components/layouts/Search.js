import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  /**
   * passing data to the parent component by using props
   * prevent default form submission behavior
   * @param {*} e
   */
  onSubmit = (e) => {
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'ligth');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
    e.preventDefault();
  };
  //Getting data from input
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users ...'
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
