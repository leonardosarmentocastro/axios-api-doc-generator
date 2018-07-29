import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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

        <div className='api-calls'>
            {/* TODO: move this to another component, like "NavbarItem" */}
            {/* TODO: refactor */}
            {/* TODO: accordeon with "request-summary" */}
            {this.props.apiDocs.map((apiDocForRoute, i) => {
              const [ firstApiCall ] = apiDocForRoute;
              const { requestDetails } = firstApiCall;
              const { method, path } = requestDetails;

              return (
                <div className='api-call' key={i}>
                  <p className='request-summary'>[{method}] {path}</p>

                  {/* TODO: load "-color-green" variant depending on request status.
                    This will might cause a fix on ".css".
                  */}
                  <div className='cases -color-green'>
                    {apiDocForRoute.map((apiCall, j) => {
                      const { testResult } = apiCall;

                      return (
                        <Fragment key={j}>
                          <p className='case'>{testResult.description}</p>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  apiDocs: PropTypes.array.isRequired,
};

export default Navbar;