import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './components/github/Github';
// import Products from './components/products/Products';
// import UserForm from './components/products/UserForm';
// import Rating from './components/products/Rating';
// import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Github />
        {/* <Products /> */}
        {/* <UserForm /> */}
        {/* <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' /> */}
      </div>
    );
  }
}

export default App;
