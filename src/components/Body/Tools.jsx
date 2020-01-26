import React from 'react';
import { toolsArr } from '../../resumeConstant';
import ToolGraph from './ToolGraph';

export default () => {
  const tools = toolsArr.map((tool, i) => {
    return (
      <li key={`tool-${i}`}>
        <p>
          <strong>{tool[0]} &nbsp; </strong>
          <ToolGraph strength={tool[1]} />
        </p>
      </li>
    )
  });

  return <ul>{tools}</ul>;
};
