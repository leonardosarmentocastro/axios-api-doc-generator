import React, { Component } from 'react';

import ResponseSummary from '../ResponseSummary';
import RequestSummary from '../RequestSummary';
import './styles.css';

export default class ApiCallSummary extends Component {
  render() {
    return (
      <div className='ApiCallSummary -color-red'>
        <div className='summary'>
          <p className='title'>[post] /users/sign-up</p>
          <p className='description'>(500) must return an "error" object when receiving an empty "user"</p>
        </div>

        <RequestSummary />
        <ResponseSummary />
      </div>
    );
  }
}
