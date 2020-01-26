import React from 'react';
import { projectsArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      projectsArr.map((project, i) => (
        <li key={`project-${i}`}>
          <p>
            <strong>{ project[0] }</strong>
            <br />
            { project[1] }
            <br />
            { project[2] && <i>{ project[2] }</i> }
          </p>
        </li>
      ))
    }
  </ul>
);
