import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import './styles.css';

const Markdown = (props) => (
  <ReactMarkdown
    className="Markdown"
    skipHtml={true}
    escapeHtml={true}
    source={`
\`\`\`json
${props.text}
\`\`\`
  `}
  />
);

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Markdown;
