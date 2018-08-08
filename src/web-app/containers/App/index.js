import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ApiCallSummary from '../../components/ApiCallSummary';
import Navbar from '../../components/Navbar';
import '../../shared/styles/font-faces.css';
import '../../shared/styles/variables.css';
import './styles.css';

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
          apiDocs={this.props.apiDocs}
          showApiCallSummary={this.showApiCallSummary}
        />

        <ApiCallSummary
          apiCall={this.state.apiCall}
        />
      </div>
    );
  }
}

App.propTypes = {
  apiDocs: PropTypes.array.isRequired,
};

export default App;
