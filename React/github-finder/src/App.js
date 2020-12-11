import React, { Component } from 'react';
import NavBar from './components/layouts/NavBar';
import Users from './users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div className='App'>
        <NavBar></NavBar>
        <div className='container'>
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
