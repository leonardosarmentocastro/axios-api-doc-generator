import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

const apiDocs = window.API_DOCS; // NOTE: This value is hardcoded on "index.html" file.
const element = (<App apiDocs={apiDocs} />);
const container = document.getElementById('root');
ReactDOM.render(element, container);
