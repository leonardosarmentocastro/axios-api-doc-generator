import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getColorVariantForHttpStatus } from '../../shared/helpers';
import ResponseSummary from '../ResponseSummary';
import RequestSummary from '../RequestSummary';
import './styles.css';

class ApiCallSummary extends Component {
  get colorVariant() {
    const httpStatus = this.props.apiCall.responseDetails.status.code;
    const colorVariant = getColorVariantForHttpStatus(httpStatus);

    return colorVariant;
  }

  get description() {
    return this.props.apiCall.testResult.description;
  }

  get requestDetails() {
    const {
      requestDetails: { method, path },
    } = this.props.apiCall;

    const requestDetails = `[${method}] ${path}`;
    return requestDetails;
  }

  render() {
    const hasApiCall = Boolean(this.props.apiCall);
    if (!hasApiCall) {
      return null;
    }

    return (
      <div className={`ApiCallSummary ${this.colorVariant}`}>
        <div className='summary'>
          <p className='title'>{this.requestDetails}</p>
          <p className='description'>{this.description}</p>
        </div>

        <RequestSummary
          body={this.props.apiCall.requestDetails.body}
          method={this.props.apiCall.requestDetails.method}
          headers={this.props.apiCall.requestDetails.headers}
        />

        <ResponseSummary
          body={this.props.apiCall.responseDetails.body}
          headers={this.props.apiCall.responseDetails.headers}
          status={this.props.apiCall.responseDetails.status.code}
        />
      </div>
    );
  }
}

ApiCallSummary.propTypes = {
  apiCall: PropTypes.shape({
    requestDetails: PropTypes.shape({
      body: PropTypes.any.isRequired,
      method: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      headers: PropTypes.object,
    }),
    responseDetails: PropTypes.shape({
      body: PropTypes.any.isRequired,
      headers: PropTypes.object,
      status: PropTypes.shape({
        code: PropTypes.number.isRequired,
      }),
    }),
    testResults: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }),
  }),
};

export default ApiCallSummary;