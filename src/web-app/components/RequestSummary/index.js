import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import HeadersTable from '../HeadersTable';
import Markdown from '../Markdown';
import './styles.css';

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];
const RequestSummary = (props) => (
  <div className='RequestSummary'>
    <p className='title'>Request</p>

    <div className='attr-container'>
      <p className='title'>Method</p>

      <div className='methods'>
        {HTTP_METHODS.map((httpMethod, i) => {
          const isSelected = (httpMethod === props.method.toUpperCase());

          return (
            <span className={`method ${isSelected ? '-is-selected' : ''}`} key={i}>
              {httpMethod}
            </span>
          );
        })}
      </div>
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

RequestSummary.propTypes = {
  body: PropTypes.object,
  method: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
};

export default RequestSummary;