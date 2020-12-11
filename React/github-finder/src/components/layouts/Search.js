import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };
  /**
   * passing data to the parent component by using props
   * prevent default form submission behavior
   * @param {*} e 
   */
  onSubmit = (e) => {
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
    e.preventDefault();
  };
  //Getting data from input
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
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
      </div>
    );
  }
}
export default Search;
