import React from 'react';
import { educations } from '../../resumeConstant';

export default () => (
  <ul>
    {
      educations.map((education) => (
        <li>
          <p>
            <strong>{ education[0] }</strong>&nbsp;<i>{ education[1] }</i>{ education[2] }
          </p>
        </li>
      ))
    }
  </ul>
);
