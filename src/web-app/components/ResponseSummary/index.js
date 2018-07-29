import React from 'react';

import HeadersTable from '../HeadersTable';
import Markdown from '../Markdown';
import './styles.css';

const ResponseSummary = () => (
  <div className='ResponseSummary'>
    <p className='title'>Response</p>

      <div className='attr-container'>
        <p className='title'>Status</p>
        <p className='status'>500</p>
      </div>

      <div className='attr-container'>
        <p className='title'>Headers</p>

        <HeadersTable />
      </div>

      <div className='attr-container'>
        <p className='title'>Body</p>
        <Markdown />
      </div>
  </div>
);

export default ResponseSummary;
