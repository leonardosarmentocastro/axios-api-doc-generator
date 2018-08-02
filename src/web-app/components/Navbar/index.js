import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Resource from './Resource';
import './styles.css';

class Navbar extends Component {
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
              key={i}
              apiDocForResource={apiDocForResource}
            />
          ))}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  apiDocs: PropTypes.array.isRequired,
};

export default Navbar;