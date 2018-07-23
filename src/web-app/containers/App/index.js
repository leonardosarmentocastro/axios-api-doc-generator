import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';

// import ApiDoc from '../../components/ApiDoc';
import Navbar from '../../components/Navbar';
import '../../shared/styles/font-faces.css';
import '../../shared/styles/variables.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
      </div>
    );
  }
}

export default App;
