import React from 'react';

import HeadersTable from '../HeadersTable';
import './styles.css';

const RequestSummary = () => (
  <div className='RequestSummary'>
    <p className='title'>Request</p>

    <div className='attr-container'>
      <p className='title'>Method</p>

      <div className='methods'>
        <span className='method -is-selected'>GET</span>
        <span className='method'>POST</span>
        <span className='method'>PUT</span>
        <span className='method'>DELETE</span>
      </div>
    </div>

    <div className='attr-container'>
      <p className='title'>Headers</p>

      <HeadersTable />
    </div>
  </div>
);

export default RequestSummary;