import React from 'react';
import { ACHIEVEMENTS_ARR } from '../../resumeConstant';

export default () => (
  <ul>
    {
      ACHIEVEMENTS_ARR.map((achievement, i) => (
        <li key={`achievement-${i}`}>
          <p>
            <strong>{achievement[0]}</strong> - <i>{ achievement[1] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);
