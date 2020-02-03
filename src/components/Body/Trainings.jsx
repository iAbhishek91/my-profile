import React from 'react';
import { TRAININGS_ARR } from '../../resumeConstant';

export default () => (
  <ul>
    {
      TRAININGS_ARR.map((training, i) => (
        <li key={`training-${i}`}>
          <p>
            <strong>{ training[0] }</strong> - <i>{ training[1] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);
