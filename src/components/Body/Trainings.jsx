import React from 'react';
import { trainingArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      trainingArr.map((training, i) => (
        <li key={`training-${i}`}>
          <p>
            <strong>{ training[0] }</strong> - <i>{ training[1] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);
