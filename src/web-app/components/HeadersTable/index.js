import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const HeadersTable = (props) => (
  <table className='HeadersTable'>
    <thead className='header'>
      <tr>
        <th className='head'>key</th>
        <th className='head'>value</th>
      </tr>
    </thead>

    <tbody className='body'>
      {Object.keys(props.headers).map(key => {
        const value = props.headers[key];

        return (
          <tr className='row' key={key}>
            <td className='cell'>{key}</td>
            <td className='cell'>{value}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

HeadersTable.propTypes = {
  headers: PropTypes.object,
};

export default HeadersTable;