import React from 'react';
import { achievementArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      achievementArr.map((achievement, i) => (
        <li key={`achievement-${i}`}>
          <p>
            <strong>{achievement[0]}</strong> - <i>{ achievement[1] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);
