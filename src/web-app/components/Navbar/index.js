import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Resource from './Resource';
import './styles.css';

class Navbar extends Component {
  handleResourceOnClick = (apiCall) => {
    this.unselectAllApiCallsOfAllResources();

    apiCall.isSelected = true;
    this.props.showApiCallSummary(apiCall);
  }

  unselectAllApiCallsOfAllResources = () => {
    this.props.apiDocs.forEach(apiDocForResource => {
      apiDocForResource.forEach(apiCall => apiCall.isSelected = false);
    });
  }

  render() {
    return (
      <nav className='Navbar'>
        <div className='logo'>
          <p className='text'>API docs</p>
        </div>
        <div className='search-input'>
          <input className='input' type='text' placeholder='search for path, description ...'/>
          <i className='icon'/>
        </div>

        <div className='resources'>
          {this.props.apiDocs.map((apiDocForResource, i) => (
            <Resource
              apiDocForResource={apiDocForResource}
              onClick={this.handleResourceOnClick}
              key={i}
            />
          ))}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  apiDocs: PropTypes.array.isRequired,
  showApiCallSummary: PropTypes.func.isRequired,
};

export default Navbar;