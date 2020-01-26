import React from 'react';
import { languagesArr } from '../../resumeConstant';

export default () => (
  <ul>
    {
      languagesArr.map((language, i) => (
        <li key={`language-${i}`}>
          <p>
            <strong>{ language[0] }</strong>&nbsp;<i>{ language[1] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);
