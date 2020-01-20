import React from 'react';
import { toolsArr } from '../../resumeConstant';
import ToolGraph from './ToolGraph';

export default () => {
  const tools = toolsArr.map((tool) => {
    return (
      <p key={tool}>
        {tool[0]} &nbsp;
        <ToolGraph strength={tool[1]} />
      </p>
    )
  });

  return <div>{tools}</div>;
};
