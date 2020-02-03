import React from 'react';
import { PROJECTS_ARR } from '../../resumeConstant';

export default () => (
  <ul>
    {
      PROJECTS_ARR.map((project, i) => (
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
