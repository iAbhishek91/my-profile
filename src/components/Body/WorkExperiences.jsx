import React from 'react';
import { WORK_EXPERIENCE_ARR } from '../../resumeConstant';

export default () => (
  <ul>
    {
      WORK_EXPERIENCE_ARR.map((workExperience, i) => (
        <li key={`workExperience-${i}`}>
          <p>
            <strong>{ workExperience[0] }</strong> - { workExperience[1] }
            <br />
            { workExperience[2] } <i>{ workExperience[3] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);