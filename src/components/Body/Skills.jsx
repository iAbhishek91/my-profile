import React from 'react';
import { skillsArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      skillsArr.map((skill, i) => (
        <li key={`skill-${i}`}>
          <p>{ skill }</p>
        </li>
      ))
    }
  </ul>
);
