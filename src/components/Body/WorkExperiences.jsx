import React from 'react';
import { workExperiencesArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      workExperiencesArr.map((workExperience, i) => (
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