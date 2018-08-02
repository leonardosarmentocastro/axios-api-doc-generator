import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import HeadersTable from '../HeadersTable';
import Markdown from '../Markdown';
import './styles.css';

const ResponseSummary = (props) => (
  <div className='ResponseSummary'>
    <p className='title'>Response</p>

    <div className='attr-container'>
      <p className='title'>Status</p>
      <p className='status'>{props.status}</p>
    </div>

    {!_.isEmpty(props.headers) &&
      <div className='attr-container'>
        <p className='title'>Headers</p>

        <HeadersTable
          headers={props.headers}
        />
      </div>
    }

    {!_.isEmpty(props.body) &&
      <div className='attr-container'>
        <p className='title'>Body</p>
        <Markdown
          text={JSON.stringify(props.body, null, 2)}
        />
      </div>
    }
  </div>
);

ResponseSummary.propTypes = {
  body: PropTypes.object,
  headers: PropTypes.object,
  status: PropTypes.number.isRequired,
};

export default ResponseSummary;
