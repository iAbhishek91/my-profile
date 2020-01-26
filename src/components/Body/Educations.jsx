import React from 'react';
import { educationsArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      educationsArr.map((education, i) => (
        <li key={`education-${i}`}>
          <p>
            <strong>{ education[0] }</strong>&nbsp;<i>{ education[1] }</i>{ education[2] }
          </p>
        </li>
      ))
    }
  </ul>
);
