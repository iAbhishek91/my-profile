import React from 'react';
import { SKILLS_ARR } from '../../resumeConstant';

export default () => (
  <ul>
    {
      SKILLS_ARR.map((skill, i) => (
        <li key={`skill-${i}`}>
          <p>{ skill }</p>
        </li>
      ))
    }
  </ul>
);
