import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './styles.css';

export default class ApiCallSummary extends Component {
  render() {
    return (
      <div className='api-call-summary -color-red'>
        <div className='summary-container'>
          <p className='title'>[post] /users/sign-up</p>
          <p className='description'>(500) must return an "error" object when receiving an empty "user"</p>
        </div>

        <div className='request-container'>
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

            <table className='table'>
              <thead className='header'>
                <tr>
                  <th className='head'>key</th>
                  <th className='head'>value</th>
                </tr>
              </thead>

              <tbody className='body'>
                <tr className='row'>
                  <td className='cell'>Authorization</td>
                  <td className='cell'>fifa-champs-development</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='response-container'>
          <p className='title'>Response</p>

            <div className='attr-container'>
              <p className='title'>Status</p>
              <p className='status'>500</p>
            </div>

            <div className='attr-container'>
              <p className='title'>Headers</p>

              <table className='table'>
                <thead className='header'>
                  <tr>
                    <th className='head'>key</th>
                    <th className='head'>value</th>
                  </tr>
                </thead>

                <tbody className='body'>
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
            </div>

            <div className='attr-container'>
              <p className='title'>Body</p>
              <ReactMarkdown
                         className="markdown"
                         skipHtml={'skip'}
                         escapeHtml={'escape'}

              source={`
\`\`\`json
{
  code: 'USER_IS_EMPTY',
  message: 'The provided "user" payload can\'t be empty.',
}
\`\`\`
              `}
              />
            </div>
        </div>
      </div>
    );
  }
}
