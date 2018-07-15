import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.styles.css';

class ApiDoc extends Component {
  render() {
    return (
      <div className='api-doc'>
        {JSON.stringify(this.props.apiCallDetails)}
      </div>
    );
  }
}

ApiDoc.propTypes = {
  apiCallDetails: {
    requestDetails: PropTypes.shape({
      method: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      headers: PropTypes.array,
    }),
    responseDetails: PropTypes.shape({
      body: PropTypes.any.isRequired,
      headers: PropTypes.array,
      status: PropTypes.shape({
        code: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    }),
    testResults: PropTypes.shape({
      description: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
    }),
  },
};

export default ApiDoc;