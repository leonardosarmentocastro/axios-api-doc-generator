import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getColorVariantForHttpStatus } from '../../../shared/helpers';
import './styles.css';

class ApiCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
    };
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

  get requestSummary() {
    const [ firstApiCall ] = this.props.apiDocForResource;
    const {
      requestDetails: { method, path },
    } = firstApiCall;

    const requestSummary = `[${method}] ${path}`;
    return requestSummary;
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

        {!this.state.isCollapsed &&
          <div className='api-calls'>
            {this.props.apiDocForResource.map((apiCall, i) => {
              const colorVariant = this.getColorVariantForApiCall(apiCall);
              const { testResult } = apiCall;

              return (
                <p
                  key={i}
                  className={`api-call ${colorVariant}`}
                >
                  {testResult.description}
                </p>
              );
            })}
          </div>
        }
      </div>
    );
  }
}

ApiCall.propTypes = {
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
};

module.exports = ApiCall;
