import React from 'react';

import './styles.css';

const HeadersTable = () => (
  <table className='HeadersTable'>
    <thead className='header'>
      <tr>
        <th className='head'>key</th>
        <th className='head'>value</th>
      </tr>
    </thead>

    <tbody className='body'>
      {/* TODO: Create "row" with received data from props. */}
      <tr className='row'>
        <td className='cell'>Authorization</td>
        <td className='cell'>abcde-fghij-123456</td>
      </tr>

      <tr className='row'>
        <td className='cell'>Content-type</td>
        <td className='cell'>application-json</td>
      </tr>
    </tbody>
  </table>
);

export default HeadersTable;