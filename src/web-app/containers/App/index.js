import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';

import ApiCallSummary from '../../components/ApiCallSummary';
import Navbar from '../../components/Navbar';
import '../../shared/styles/font-faces.css';
import '../../shared/styles/variables.css';
import './styles.css';

import apiDocs from '../../api-docs.json';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar
          apiDocs={apiDocs}
        />
        <ApiCallSummary />
      </div>
    );
  }
}

export default App;
