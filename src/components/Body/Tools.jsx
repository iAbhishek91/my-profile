import React from 'react';
import { TOOLS_ARR } from '../../resumeConstant';
import ToolGraph from './ToolGraph';

export default () => {
  const tools = TOOLS_ARR.map((tool, i) => {
    return (
      <p key={`tool-${i}`}>
        <strong>{tool[0]} &nbsp; </strong>
        <ToolGraph strength={tool[1]} />
      </p>
    )
  });

  return tools;
};
