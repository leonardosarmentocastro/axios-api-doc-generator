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
  state = {
    apiCall: null,
  };

  showApiCallSummary = (apiCall) => {
    this.setState({
      apiCall,
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar
          apiDocs={apiDocs}
          showApiCallSummary={this.showApiCallSummary}
        />

        <ApiCallSummary
          apiCall={this.state.apiCall}
        />
      </div>
    );
  }
}

export default App;
