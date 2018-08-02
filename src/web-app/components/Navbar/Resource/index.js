import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getColorVariantForHttpStatus } from '../../../shared/helpers';
import './styles.css';

class Resource extends Component {
  state = {
    isCollapsed: false,
  };

  get requestSummary() {
    const [ firstApiCall ] = this.props.apiDocForResource;
    const {
      requestDetails: { method, path },
    } = firstApiCall;

    const requestSummary = `[${method}] ${path}`;
    return requestSummary;
  }

  collapse() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  }

  getColorVariantForApiCall(apiCall) {
    const { responseDetails } = apiCall;
    const {
      status: { code: httpStatus }
    } = responseDetails;

    const colorVariant = getColorVariantForHttpStatus(httpStatus);
    return colorVariant;
  }

  renderApiCalls = () => {
    return (
      <div className='api-calls'>
        {this.props.apiDocForResource.map((apiCall, i) => {
          const colorVariant = this.getColorVariantForApiCall(apiCall);
          const { isSelected, testResult } = apiCall;

          return (
            <p
              className={`
                api-call
                ${colorVariant}
                ${isSelected ? '-is-selected' : ''}
              `.trim()}
              key={i}
              onClick={() => this.props.onClick(apiCall)}
            >
              {testResult.description}
            </p>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className='Resource'>
        <p
          className='request-summary'
          onClick={() => this.collapse()}
        >
          {this.requestSummary}
        </p>

        {!this.state.isCollapsed && this.renderApiCalls()}
      </div>
    );
  }
}

Resource.propTypes = {
  apiDocForResource: PropTypes.arrayOf(PropTypes.shape({
    requestDetails: PropTypes.shape({
      method: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
    responseDetails: PropTypes.shape({
      status: PropTypes.shape({
        code: PropTypes.number.isRequired,
      }),
    }),
    testResults: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }),
  })),
  onClick: PropTypes.func.isRequired,
};

module.exports = Resource;
