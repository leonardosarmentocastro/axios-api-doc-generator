import React from 'react';
import ReactMarkdown from 'react-markdown';

import './styles.css';

const Markdown = () => (
  <ReactMarkdown
    className="Markdown"
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
);

export default Markdown;
